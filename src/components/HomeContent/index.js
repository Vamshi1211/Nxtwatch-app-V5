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
  HomeVideoListItem,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const apiStatusValue = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class HomeContent extends Component {
  state = {bannerImage: true, apiStatus: apiStatusValue.initial, homeVideos: []}

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/all?search='
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
    }
  }

  crossClicked = () => {
    this.setState({bannerImage: false})
  }

  searchBar = isDarkTheme => (
    <SearchBarContainer isDarkTheme={isDarkTheme}>
      <SearchBarInput
        type="search"
        placeholder="Search"
        isDarkTheme={isDarkTheme}
      />
      <SearchButton isDarkTheme={isDarkTheme}>
        <SearchIcon isdarktheme={isDarkTheme.toString()} />
      </SearchButton>
    </SearchBarContainer>
  )

  renderHomeView = () => {
    const {homeVideos} = this.state
    console.log(homeVideos)
    const {channel, title, thumbnailUrl, viewCount, publishedAt} = homeVideos

    return (
      <HomeVideosListContainer>
        <HomeVideoListItem>Hello</HomeVideoListItem>
      </HomeVideosListContainer>
    )
  }

  renderViews = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusValue.success:
        return this.renderHomeView()
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
                        alt="website logo"
                      />
                      <BannerHeading>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerHeading>
                      <BannerButton type="button">GET IT NOW</BannerButton>
                    </BannerTextContainer>
                    <BannerCloseButton
                      type="button"
                      onClick={this.crossClicked}
                    >
                      <CrossIcon />
                    </BannerCloseButton>
                  </BannerImageContainer>
                )}
                {this.searchBar(isDarkTheme)}
                {this.renderViews()}
              </HomeContentContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default HomeContent
