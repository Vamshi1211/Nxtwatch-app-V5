import Header from '../Header'
import SideNavBar from '../SideNavBar'
import {
  NotFoundRouteContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDes,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const NotFoundRoute = () => (
  <>
    <Header />
    <NotFoundRouteContainer>
      <SideNavBar />
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <NotFoundContainer isDarkTheme={isDarkTheme}>
              {isDarkTheme ? (
                <NotFoundImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png"
                  alt="not found"
                />
              ) : (
                <NotFoundImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                  alt="not found"
                />
              )}

              <NotFoundHeading isDarkTheme={isDarkTheme}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundDes isDarkTheme={isDarkTheme}>
                We are sorry, the page you requested could not be found
              </NotFoundDes>
            </NotFoundContainer>
          )
        }}
      </ThemeContext.Consumer>
    </NotFoundRouteContainer>
  </>
)

export default NotFoundRoute
