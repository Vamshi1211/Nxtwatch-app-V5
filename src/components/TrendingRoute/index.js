import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import SideNavBar from '../SideNavBar'
import TrendingVideos from '../TrendingVideos'
import {
  TrendingVideosContainer,
  TrendingVideoItemContainer,
  TrendingLogoAndTextContainer,
  TrendingLogoContainer,
  TrendingImage,
  TrendingHeading,
  TrendingVideoItemsContainer,
} from './styledComponents'
import {
  LoaderContainer,
  LoaderSpinner,
  NoVideosContainer,
  NoVideosImage,
  NoVideosText,
  NoVideoTryAgain,
  NoVideosDes,
  NoVideosRetryButton,
} from '../HomeContent/styledComponents'
import ThemeContext from '../../context/ThemeContext'

const apiStatusValue = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class TrendingRoute extends Component {
  state = {apiStatus: apiStatusValue.initial, trendingVideosList: []}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusValue.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
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
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        viewCount: eachItem.view_count,
        title: eachItem.title,
        name: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
      }))

      this.setState({
        trendingVideosList: updatedData,
        apiStatus: apiStatusValue.success,
      })
    } else {
      this.setState({apiStatus: apiStatusValue.failure})
    }
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

  renderTrendingView = isDarkTheme => {
    const {trendingVideosList} = this.state

    return (
      <>
        <TrendingLogoAndTextContainer isDarkTheme={isDarkTheme}>
          <TrendingLogoContainer isDarkTheme={isDarkTheme}>
            <TrendingImage />
          </TrendingLogoContainer>
          <TrendingHeading isDarkTheme={isDarkTheme}>Trending</TrendingHeading>
        </TrendingLogoAndTextContainer>
        <TrendingVideoItemsContainer>
          {trendingVideosList.map(eachItem => (
            <TrendingVideos key={eachItem.id} eachVideo={eachItem} />
          ))}
        </TrendingVideoItemsContainer>
      </>
    )
  }

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
      <NoVideoTryAgain>Please try again.</NoVideoTryAgain>
      <NoVideosRetryButton type="button" onClick={this.retryClicked}>
        Retry
      </NoVideosRetryButton>
    </NoVideosContainer>
  )

  renderViews = isDarkTheme => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusValue.inProgress:
        return this.renderLoadingView(isDarkTheme)
      case apiStatusValue.success:
        return this.renderTrendingView(isDarkTheme)
      case apiStatusValue.failure:
        return this.renderFailureView(isDarkTheme)
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <TrendingVideosContainer>
          <SideNavBar />
          <ThemeContext.Consumer>
            {value => {
              const {isDarkTheme} = value

              return (
                <TrendingVideoItemContainer isDarkTheme={isDarkTheme}>
                  {this.renderViews(isDarkTheme)}
                </TrendingVideoItemContainer>
              )
            }}
          </ThemeContext.Consumer>
        </TrendingVideosContainer>
      </>
    )
  }
}

export default TrendingRoute
