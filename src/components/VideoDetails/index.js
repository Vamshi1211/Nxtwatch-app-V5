import {Component} from 'react'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import VideoPlayer from '../VideoPlayer'
import {
  VideoItemContainer,
  VideoPlayerTextContainer,
  VideoPlayerDes,
  VideoPlayerViewsAndLikeContainer,
  VideoPlayerViewListContainer,
  VideoPlayerParagraph,
  VideoPlayerDateListContainer,
  VideoPlayerViewAndDateContainer,
  VideoPlayerLikesAndSaveContainer,
  LikeDisLikeSaveContainer,
  LikeButton,
  LikeIcon,
  DisLikeIcon,
  SavedIcon,
  HorizontalLine,
  VideoProfileInfoContainer,
  VideoProfileImage,
  VideoProfileTextContainer,
  VideoChannelName,
  VideoSubscriberCount,
  VideoDescription,
  VideoProfileAndLogoContainer,
  VideoMobileDescription,
  LoaderVideoContainer,
  LoaderVideoSpinner,
  DisLikeButton,
  SavedButton,
  LikeIconParagraph,
  DisLikeParagraph,
  SavedParagraph,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'
import {
  NoVideosContainer,
  NoVideosImage,
  NoVideosText,
  NoVideosDes,
  NoVideosRetryButton,
} from '../HomeContent/styledComponents'

const apiStatusValue = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoDetails extends Component {
  state = {
    apiStatus: apiStatusValue.initial,
    videoDetails: {},
    isLike: false,
    isDislike: false,
    isSave: false,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    this.setState({apiStatus: apiStatusValue.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)

    if (response.ok === true) {
      const fetchedData = await response.json()

      const updatedData = {
        id: fetchedData.video_details.id,
        channel: fetchedData.video_details.channel,
        description: fetchedData.video_details.description,
        publishedAt: fetchedData.video_details.published_at,
        thumbnailUrl: fetchedData.video_details.thumbnail_url,
        title: fetchedData.video_details.title,
        videoUrl: fetchedData.video_details.video_url,
        viewCount: fetchedData.video_details.view_count,
      }
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusValue.success,
      })
    } else {
      this.setState({apiStatus: apiStatusValue.failure})
    }
  }

  renderLoadingView = isDarkTheme => (
    <LoaderVideoContainer data-testid="loader">
      <LoaderVideoSpinner
        color={isDarkTheme ? '#ffffff' : '#0f0f0f'}
        type="ThreeDots"
        height="50"
        width="50"
      />
    </LoaderVideoContainer>
  )

  likeButtonClicked = () => {
    this.setState({
      isLike: true,
      isDislike: false,
    })
  }

  disLikeButtonClicked = () => {
    this.setState({
      isLike: false,
      isDislike: true,
    })
  }

  saveButtonClicked = () => {
    this.setState(prevState => ({
      isSave: !prevState.isSave,
    }))
  }

  renderVideoDetails = isDarkTheme => {
    const {videoDetails, isLike, isDislike, isSave} = this.state
    const {description, viewCount, publishedAt, channel, title} = videoDetails
    return (
      <>
        <VideoPlayer videoDetails={videoDetails} />
        <VideoPlayerTextContainer>
          <VideoPlayerDes isDarkTheme={isDarkTheme}>{title}</VideoPlayerDes>
          <VideoPlayerViewsAndLikeContainer>
            <VideoPlayerViewAndDateContainer>
              <VideoPlayerViewListContainer>
                <VideoPlayerParagraph>{viewCount} views</VideoPlayerParagraph>
              </VideoPlayerViewListContainer>
              <VideoPlayerDateListContainer>
                <VideoPlayerParagraph>
                  {publishedAt} years ago
                </VideoPlayerParagraph>
              </VideoPlayerDateListContainer>
            </VideoPlayerViewAndDateContainer>

            <VideoPlayerLikesAndSaveContainer>
              <LikeDisLikeSaveContainer>
                <LikeButton
                  type="button"
                  onClick={this.likeButtonClicked}
                  isLike={isLike}
                >
                  <LikeIcon isLike={isLike} />
                  <LikeIconParagraph isLike={isLike}>Like</LikeIconParagraph>
                </LikeButton>
              </LikeDisLikeSaveContainer>

              <LikeDisLikeSaveContainer>
                <DisLikeButton
                  type="button"
                  onClick={this.disLikeButtonClicked}
                  isDislike={isDislike}
                >
                  <DisLikeIcon isDislike={isDislike} />
                  <DisLikeParagraph isDislike={isDislike}>
                    Dislike
                  </DisLikeParagraph>
                </DisLikeButton>
              </LikeDisLikeSaveContainer>

              <LikeDisLikeSaveContainer>
                <SavedButton
                  type="button"
                  onClick={this.saveButtonClicked}
                  isSave={isSave}
                >
                  <SavedIcon isSave={isSave} />
                  <SavedParagraph isSave={isSave}>Save</SavedParagraph>
                </SavedButton>
              </LikeDisLikeSaveContainer>
            </VideoPlayerLikesAndSaveContainer>
          </VideoPlayerViewsAndLikeContainer>
        </VideoPlayerTextContainer>
        <HorizontalLine />
        <VideoProfileInfoContainer>
          <VideoProfileAndLogoContainer>
            <VideoProfileImage
              src={channel.profile_image_url}
              alt="channel logo"
            />
            <VideoProfileTextContainer>
              <VideoChannelName isDarkTheme={isDarkTheme}>
                {channel.name}
              </VideoChannelName>
              <VideoSubscriberCount>
                {channel.subscriber_count}
              </VideoSubscriberCount>
              <VideoDescription isDarkTheme={isDarkTheme}>
                {description}
              </VideoDescription>
            </VideoProfileTextContainer>
          </VideoProfileAndLogoContainer>
          <VideoMobileDescription isDarkTheme={isDarkTheme}>
            {description}
          </VideoMobileDescription>
        </VideoProfileInfoContainer>
      </>
    )
  }

  retryClicked = () => {
    this.getVideoItemDetails()
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
      <NoVideosDes>Please try again.</NoVideosDes>
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
        return this.renderVideoDetails(isDarkTheme)
      case apiStatusValue.failure:
        return this.renderFailureView(isDarkTheme)
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <VideoItemContainer isDarkTheme={isDarkTheme}>
              {this.renderViews(isDarkTheme)}
            </VideoItemContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(VideoDetails)
