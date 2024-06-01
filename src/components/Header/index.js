import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import {
  NavbarHeader,
  NavItemsMobileContainer,
  NavMobileContainer,
  NavImage,
  ThemeChangeControllerButton,
  IoMoon,
  FiLogOutIcon,
  GiHamburgerMenuIcon,
  NavWebContainer,
  NavWebImage,
  NavItemsWebContainer,
  ProfileImage,
  HamBurgerIconButton,
  LogoutIconButton,
  PopupContainer,
  PopupDisplayContainer,
  PopupHeading,
  PopupButtons,
  CancelButton,
  ConfirmButton,
  PopupMenuContainer,
  HomeNavItemContainer,
  HomeLogo,
  HomeText,
  NavHomeListItem,
  NavTrendingListItem,
  NavGamingListItem,
  NavSavedListItem,
  TrendingLogo,
  GamingLogo,
  SavedLogo,
} from './styledComponents'

const Header = props => {
  const {history, match} = props
  const {path} = match

  const logoutClicked = () => {
    history.replace('./login')
    Cookies.remove('jwt_token')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, themeChange} = value

        const overlayStyles = {
          backgroundColor: isDarkTheme ? '#181818' : '#ffffff',
        }
        const home = true

        const onClickThemeChange = () => {
          themeChange()
        }

        return (
          <NavbarHeader isDarkTheme={isDarkTheme}>
            <NavMobileContainer>
              {isDarkTheme ? (
                <Link to="/">
                  <NavImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    alt="website logo"
                  />
                </Link>
              ) : (
                <Link to="/">
                  <NavImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                </Link>
              )}

              <NavItemsMobileContainer>
                <ThemeChangeControllerButton
                  onClick={onClickThemeChange}
                  data-testid="theme"
                >
                  <IoMoon isdarktheme={isDarkTheme.toString()} />
                </ThemeChangeControllerButton>
                <PopupContainer
                  modal
                  trigger={
                    <HamBurgerIconButton>
                      <GiHamburgerMenuIcon
                        isdarktheme={isDarkTheme.toString()}
                      />
                    </HamBurgerIconButton>
                  }
                  overlayStyle={overlayStyles}
                  isDarkTheme={isDarkTheme}
                >
                  {close => (
                    <PopupMenuContainer isDarkTheme={isDarkTheme}>
                      <NavHomeListItem
                        home={home}
                        isDarkTheme={isDarkTheme}
                        path={path}
                      >
                        <HomeNavItemContainer to="/" onClick={() => close()}>
                          <HomeLogo
                            isdarktheme={isDarkTheme.toString()}
                            path={path}
                          />
                          <HomeText isDarkTheme={isDarkTheme}>Home</HomeText>
                        </HomeNavItemContainer>
                      </NavHomeListItem>
                      <NavTrendingListItem
                        isDarkTheme={isDarkTheme}
                        path={path}
                      >
                        <HomeNavItemContainer
                          to="/trending"
                          onClick={() => close()}
                        >
                          <TrendingLogo
                            path={path}
                            isdarktheme={isDarkTheme.toString()}
                          />
                          <HomeText isDarkTheme={isDarkTheme}>
                            Trending
                          </HomeText>
                        </HomeNavItemContainer>
                      </NavTrendingListItem>
                      <NavGamingListItem isDarkTheme={isDarkTheme} path={path}>
                        <HomeNavItemContainer
                          to="/gaming"
                          onClick={() => close()}
                        >
                          <GamingLogo
                            path={path}
                            isdarktheme={isDarkTheme.toString()}
                          />
                          <HomeText isDarkTheme={isDarkTheme}>Gaming</HomeText>
                        </HomeNavItemContainer>
                      </NavGamingListItem>
                      <NavSavedListItem isDarkTheme={isDarkTheme} path={path}>
                        <HomeNavItemContainer
                          to="/saved-videos"
                          onClick={() => close()}
                        >
                          <SavedLogo
                            path={path}
                            isdarktheme={isDarkTheme.toString()}
                          />
                          <HomeText isDarkTheme={isDarkTheme}>Saved</HomeText>
                        </HomeNavItemContainer>
                      </NavSavedListItem>
                    </PopupMenuContainer>
                  )}
                </PopupContainer>

                <Popup
                  modal
                  trigger={
                    <LogoutIconButton type="button" onClick={logoutClicked}>
                      <FiLogOutIcon isdarktheme={isDarkTheme.toString()} />
                    </LogoutIconButton>
                  }
                >
                  {close => (
                    <PopupDisplayContainer isDarkTheme={isDarkTheme}>
                      <PopupHeading isDarkTheme={isDarkTheme}>
                        Are you sure you want to logout?
                      </PopupHeading>
                      <PopupButtons>
                        <CancelButton onClick={() => close()}>
                          Cancel
                        </CancelButton>
                        <ConfirmButton onClick={logoutClicked}>
                          Confirm
                        </ConfirmButton>
                      </PopupButtons>
                    </PopupDisplayContainer>
                  )}
                </Popup>
              </NavItemsMobileContainer>
            </NavMobileContainer>

            <NavWebContainer>
              {isDarkTheme ? (
                <Link to="/">
                  <NavWebImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    alt="nxt watch logo"
                  />
                </Link>
              ) : (
                <Link to="/">
                  <NavWebImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="nxt watch logo"
                  />
                </Link>
              )}

              <NavItemsWebContainer>
                <ThemeChangeControllerButton onClick={onClickThemeChange}>
                  <IoMoon isdarktheme={isDarkTheme.toString()} />
                </ThemeChangeControllerButton>
                <HamBurgerIconButton>
                  <ProfileImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </HamBurgerIconButton>

                <Popup
                  modal
                  trigger={
                    <LogoutIconButton onClick={logoutClicked}>
                      Logout
                    </LogoutIconButton>
                  }
                >
                  {close => (
                    <PopupDisplayContainer isDarkTheme={isDarkTheme}>
                      <PopupHeading isDarkTheme={isDarkTheme}>
                        Are you sure you want to logout?
                      </PopupHeading>
                      <PopupButtons>
                        <CancelButton onClick={() => close()}>
                          Cancel
                        </CancelButton>
                        <ConfirmButton onClick={logoutClicked}>
                          Confirm
                        </ConfirmButton>
                      </PopupButtons>
                    </PopupDisplayContainer>
                  )}
                </Popup>
              </NavItemsWebContainer>
            </NavWebContainer>
          </NavbarHeader>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
