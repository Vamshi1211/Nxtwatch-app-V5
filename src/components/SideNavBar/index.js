import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'
import {
  SideBarNavContainer,
  SideBarContainer,
  SideBarItem,
  SideBarText,
  HomeIcon,
  NavLink,
  TrendingIcon,
  GamingIcon,
  SavedIcon,
  FooterSection,
  ContactUsHeading,
  SocialMediaContacts,
  SocialMediaImage,
  FooterDes,
} from './styledComponents'

// import SideBarItemsList from '../SideBarItemsList'

// const sideBarMenu = [
//   {displayId: 'HOME', displayText: 'Home'},
//   {displayId: 'TRENDING', displayText: 'Trending'},
//   {displayId: 'GAMING', displayText: 'Gaming'},
//   {displayId: 'SAVED', displayText: 'Saved Videos'},
// ]

class SideNavBar extends Component {
  state = {home: false, trending: false, gaming: false, saved: false}

  homeClicked = () => {
    this.setState({home: true, trending: false, gaming: false, saved: false})
  }

  trendingClicked = () => {
    this.setState({home: false, trending: true, gaming: false, saved: false})
  }

  gamingClicked = () => {
    this.setState({home: false, trending: false, gaming: true, saved: false})
  }

  savedClicked = () => {
    this.setState({home: false, trending: false, gaming: false, saved: true})
  }

  render() {
    const {home, trending, gaming, saved} = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <SideBarNavContainer isDarkTheme={isDarkTheme}>
              <SideBarContainer>
                <NavLink to="/">
                  <SideBarItem
                    onClick={this.homeClicked}
                    home={home}
                    isDarkTheme={isDarkTheme}
                  >
                    <HomeIcon isdarktheme={isDarkTheme.toString()} />
                    <SideBarText isDarkTheme={isDarkTheme}>Home</SideBarText>
                  </SideBarItem>
                </NavLink>

                <NavLink to="/trending">
                  <SideBarItem
                    onClick={this.trendingClicked}
                    trending={trending}
                  >
                    <TrendingIcon isdarktheme={isDarkTheme.toString()} />
                    <SideBarText isDarkTheme={isDarkTheme}>
                      Trending
                    </SideBarText>
                  </SideBarItem>
                </NavLink>

                <NavLink to="/gaming">
                  <SideBarItem onClick={this.gamingClicked} gaming={gaming}>
                    <GamingIcon isdarktheme={isDarkTheme.toString()} />
                    <SideBarText isDarkTheme={isDarkTheme}>Gaming</SideBarText>
                  </SideBarItem>
                </NavLink>

                <NavLink to="/saved-videos">
                  <SideBarItem onClick={this.savedClicked} saved={saved}>
                    <SavedIcon isdarktheme={isDarkTheme.toString()} />
                    <SideBarText isDarkTheme={isDarkTheme}>
                      Saved Videos
                    </SideBarText>
                  </SideBarItem>
                </NavLink>
              </SideBarContainer>
              <FooterSection>
                <ContactUsHeading isDarkTheme={isDarkTheme}>
                  CONTACT US
                </ContactUsHeading>
                <SocialMediaContacts>
                  <SocialMediaImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <SocialMediaImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <SocialMediaImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SocialMediaContacts>
                <FooterDes isDarkTheme={isDarkTheme}>
                  Enjoy! Now to see your channels and recommendations
                </FooterDes>
              </FooterSection>
            </SideBarNavContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SideNavBar
