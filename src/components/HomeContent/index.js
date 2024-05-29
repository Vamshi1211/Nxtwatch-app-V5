import {Component} from 'react'

import Cookies from 'js-cookie'
import {
  HomeContentContainer,
  BannerImageContainer,
  BannerTextContainer,
  BannerImage,
  BannerHeading,
  BannerButton,
  BannerCloseButton,
  CrossIcon,
  SearchBarContainer,
  SearchBarInput,
  SearchButton,
  SearchIcon,
  HomeVideosListContainer,
  LoaderContainer,
  LoaderSpinner,
  NoVideosContainer,
  NoVideosImage,
  NoVideosText,
  NoVideosDes,
  NoVideosRetryButton,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'
import HomeContentItems from '../HomeContentItems'

const apiStatusValue = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class HomeContent extends Component {
  state = {
    bannerImage: true,
    apiStatus: apiStatusValue.initial,
    homeVideos: [],
    searchInput: '',
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({apiStatus: apiStatusValue.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(eachItem => ({
        channel: eachItem.channel,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
        id: eachItem.id,
      }))
      this.setState({
        homeVideos: updatedData,
        apiStatus: apiStatusValue.success,
      })
    } else {
      this.setState({apiStatus: apiStatusValue.failure})
    }
  }

  crossClicked = () => {
    this.setState({bannerImage: false})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearchButtonClicked = () => {
    this.getHomeVideos()
  }

  searchBar = isDarkTheme => {
    const {searchInput} = this.state
    return (
      <SearchBarContainer isDarkTheme={isDarkTheme}>
        <SearchBarInput
          type="search"
          placeholder="Search"
          isDarkTheme={isDarkTheme}
          onChange={this.onChangeSearchInput}
          value={searchInput}
        />
        <SearchButton
          isDarkTheme={isDarkTheme}
          data-testid="searchButton"
          onClick={this.onSearchButtonClicked}
        >
          <SearchIcon isdarktheme={isDarkTheme.toString()} />
        </SearchButton>
      </SearchBarContainer>
    )
  }

  retryClicked = () => {
    this.getHomeVideos()
  }

  renderHomeView = isDarkTheme => {
    const {homeVideos} = this.state
    const lengthOfHome = homeVideos.length

    return (
      <>
        {lengthOfHome > 0 ? (
          <HomeVideosListContainer>
            {homeVideos.map(eachItem => (
              <HomeContentItems key={eachItem.id} eachHomeItem={eachItem} />
            ))}
          </HomeVideosListContainer>
        ) : (
          <NoVideosContainer>
            <NoVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideosText isDarkTheme={isDarkTheme}>
              No Search results found
            </NoVideosText>
            <NoVideosDes>
              Try different key words or remove search filter
            </NoVideosDes>
            <NoVideosRetryButton type="button" onClick={this.retryClicked}>
              Retry
            </NoVideosRetryButton>
          </NoVideosContainer>
        )}
      </>
    )
  }

  renderLoadingView = isDarkTheme => (
    <LoaderContainer data-testid="loader">
      <LoaderSpinner
        color={isDarkTheme ? '#ffffff' : '#0f0f0f'}
        type="ThreeDots"
        height="50"
        width="50"
      />
    </LoaderContainer>
  )

  renderFailureView = isDarkTheme => (
    <NoVideosContainer>
      {isDarkTheme ? (
        <NoVideosImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
          alt="failure"
        />
      ) : (
        <NoVideosImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
          alt="failure"
        />
      )}

      <NoVideosText isDarkTheme={isDarkTheme}>
        Oops! Something Went Wrong
      </NoVideosText>
      <NoVideosDes>
        We are having some trouble to complete your request.
      </NoVideosDes>
      <NoVideosDes>Please try again.</NoVideosDes>
      <NoVideosRetryButton type="button" onClick={this.retryClicked}>
        Retry
      </NoVideosRetryButton>
    </NoVideosContainer>
  )

  renderViews = isDarkTheme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusValue.success:
        return this.renderHomeView(isDarkTheme)
      case apiStatusValue.inProgress:
        return this.renderLoadingView(isDarkTheme)
      case apiStatusValue.failure:
        return this.renderFailureView(isDarkTheme)
      default:
        return null
    }
  }

  render() {
    const {bannerImage} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <HomeContentContainer isDarkTheme={isDarkTheme}>
                {bannerImage && (
                  <BannerImageContainer>
                    <BannerTextContainer>
                      <BannerImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <BannerHeading>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerHeading>
                      <BannerButton type="button">GET IT NOW</BannerButton>
                    </BannerTextContainer>
                    <BannerCloseButton
                      type="button"
                      onClick={this.crossClicked}
                      data-testid="close"
                    >
                      <CrossIcon />
                    </BannerCloseButton>
                  </BannerImageContainer>
                )}
                {this.searchBar(isDarkTheme)}
                {this.renderViews(isDarkTheme)}
              </HomeContentContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default HomeContent
