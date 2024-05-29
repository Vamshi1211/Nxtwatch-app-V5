import Header from '../Header'
import SideNavBar from '../SideNavBar'
import HomeContent from '../HomeContent'
import {HomeSidebarAndContentContainer, HomeContainer} from './styledComponents'

const Home = () => (
  <HomeContainer data-testid="home">
    <Header />
    <HomeSidebarAndContentContainer>
      <SideNavBar />
      <HomeContent />
    </HomeSidebarAndContentContainer>
  </HomeContainer>
)

export default Home
