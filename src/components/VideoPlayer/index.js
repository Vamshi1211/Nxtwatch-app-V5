import {Component} from 'react'
import {
  VideoPlayerContainer,
  ReactMobileVideoPlayer,
  ReactWebVideoPlayer,
} from './styledComponents'

class VideoPlayer extends Component {
  render() {
    const {videoDetails} = this.props
    const {videoUrl, thumbnailUrl} = videoDetails
    return (
      <VideoPlayerContainer>
        <ReactMobileVideoPlayer
          width="100%"
          height="230px"
          controls
          light={<img src={thumbnailUrl} alt="video thumbnail" />}
          url={videoUrl}
        />
        <ReactWebVideoPlayer
          width="85%"
          height="420px"
          controls
          light={<img src={thumbnailUrl} alt="video thumbnail" />}
          url={videoUrl}
        />
      </VideoPlayerContainer>
    )
  }
}

export default VideoPlayer

//  light={<img src={thumbnailUrl} alt="video thumbnail" />}
