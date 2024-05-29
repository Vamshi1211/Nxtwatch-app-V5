import Header from '../Header'
import SideNavBar from '../SideNavBar'
import VideoDetails from '../VideoDetails'
import {VideoItemDetailsContainer} from './styledComponents'

const VideoItemDetailsRoute = () => (
  <>
    <Header />
    <VideoItemDetailsContainer>
      <SideNavBar />
      <VideoDetails />
    </VideoItemDetailsContainer>
  </>
)

export default VideoItemDetailsRoute
