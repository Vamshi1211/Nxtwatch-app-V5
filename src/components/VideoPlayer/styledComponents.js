import styled from 'styled-components'
import ReactPlayer from 'react-player'

export const VideoPlayerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const ReactMobileVideoPlayer = styled(ReactPlayer)`
  display: block;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const ReactWebVideoPlayer = styled(ReactPlayer)`
  display: none;
  @media screen and (min-width: 576px) {
    display: block;
  }
`
