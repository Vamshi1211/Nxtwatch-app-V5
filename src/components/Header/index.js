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
} from './styledComponents'

const overlayStyles = {
  backgroundColor: '#ffff',
  width: '40vh',
}

const Header = props => {
  const logoutClicked = () => {
    const {history} = props
    history.replace('./login')
    Cookies.remove('jwt_token')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme, themeChange} = value

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
                    alt="nxt watch logo"
                  />
                </Link>
              ) : (
                <Link to="/">
                  <NavImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="nxt watch logo"
                  />
                </Link>
              )}

              <NavItemsMobileContainer>
                <ThemeChangeControllerButton onClick={onClickThemeChange}>
                  <IoMoon isdarktheme={isDarkTheme.toString()} />
                </ThemeChangeControllerButton>
                <HamBurgerIconButton>
                  <GiHamburgerMenuIcon isdarktheme={isDarkTheme.toString()} />
                </HamBurgerIconButton>
                <Popup
                  modal
                  trigger={
                    <LogoutIconButton type="button">
                      <FiLogOutIcon isdarktheme={isDarkTheme.toString()} />
                    </LogoutIconButton>
                  }
                >
                  <h1>Hello</h1>
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
                <PopupContainer>
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
                </PopupContainer>
              </NavItemsWebContainer>
            </NavWebContainer>
          </NavbarHeader>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
