import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
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
} from './styledComponents'

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
                <NavImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  alt="website logo"
                />
              ) : (
                <NavImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                />
              )}

              <NavItemsMobileContainer>
                <ThemeChangeControllerButton onClick={onClickThemeChange}>
                  <IoMoon isdarktheme={isDarkTheme.toString()} />
                </ThemeChangeControllerButton>
                <HamBurgerIconButton>
                  <GiHamburgerMenuIcon isdarktheme={isDarkTheme.toString()} />
                </HamBurgerIconButton>
                <LogoutIconButton onClick={logoutClicked}>
                  <FiLogOutIcon isdarktheme={isDarkTheme.toString()} />
                </LogoutIconButton>
              </NavItemsMobileContainer>
            </NavMobileContainer>

            <NavWebContainer>
              {isDarkTheme ? (
                <NavWebImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  alt="website logo"
                />
              ) : (
                <NavWebImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                />
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
                <LogoutIconButton onClick={logoutClicked}>
                  Logout
                </LogoutIconButton>
              </NavItemsWebContainer>
            </NavWebContainer>
          </NavbarHeader>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(Header)
