import Header from '../Header'
import SideNavBar from '../SideNavBar'
import HomeContent from '../HomeContent'
import {HomeSidebarAndContentContainer} from './styledComponents'

const Home = () => (
  <>
    <Header />
    <HomeSidebarAndContentContainer>
      <SideNavBar />
      <HomeContent />
    </HomeSidebarAndContentContainer>
  </>
)

export default Home
