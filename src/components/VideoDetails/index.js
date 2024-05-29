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
} from './styledComponents'
import {LoaderContainer, LoaderSpinner} from '../HomeContent/styledComponents'

const apiStatusValue = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoDetails extends Component {
  state = {apiStatus: apiStatusValue.initial, videoDetails: {}}

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

  renderVideoDetails = () => {
    const {videoDetails} = this.state
    const {description, viewCount, publishedAt} = videoDetails
    return (
      <>
        <VideoPlayer videoDetails={videoDetails} />
        <VideoPlayerTextContainer>
          <VideoPlayerDes>{description}</VideoPlayerDes>
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
                <LikeButton>
                  <LikeIcon />
                  <VideoPlayerParagraph>Like</VideoPlayerParagraph>
                </LikeButton>
              </LikeDisLikeSaveContainer>

              <LikeDisLikeSaveContainer>
                <LikeButton>
                  <DisLikeIcon />
                  <VideoPlayerParagraph>Like</VideoPlayerParagraph>
                </LikeButton>
              </LikeDisLikeSaveContainer>

              <LikeDisLikeSaveContainer>
                <LikeButton>
                  <SavedIcon />
                  <VideoPlayerParagraph>Like</VideoPlayerParagraph>
                </LikeButton>
              </LikeDisLikeSaveContainer>
            </VideoPlayerLikesAndSaveContainer>
          </VideoPlayerViewsAndLikeContainer>
        </VideoPlayerTextContainer>
      </>
    )
  }

  renderViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusValue.inProgress:
        return this.renderLoadingView()
      case apiStatusValue.success:
        return this.renderVideoDetails()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <VideoItemContainer>
          Hello
          {this.renderViews()}
        </VideoItemContainer>
      </>
    )
  }
}

export default withRouter(VideoDetails)
