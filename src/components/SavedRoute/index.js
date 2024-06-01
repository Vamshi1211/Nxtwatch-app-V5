import Header from '../Header'
import SideNavBar from '../SideNavBar'
import {
  SavedRouteContainer,
  SavedVideosContainer,
  SavedLogoAndTextContainer,
  SavedLogoContainer,
  SavedHeading,
  SavedImage,
  SavedVideosListContainer,
  NoSavedImageContainer,
  NoSavedImage,
  NoSavedText,
  NoSavedDes,
} from './styledComponents'

import SavedVideosList from '../SavedVideosList'
import ThemeContext from '../../context/ThemeContext'

const SavedRoute = () => (
  <>
    <Header />
    <SavedRouteContainer data-testid="savedVideos">
      <SideNavBar />
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, savedList} = value

          return (
            <SavedVideosContainer
              isDarkTheme={isDarkTheme}
              data-testid="savedVideos"
            >
              <SavedLogoAndTextContainer
                isDarkTheme={isDarkTheme}
                data-testid="banner"
              >
                <SavedLogoContainer isDarkTheme={isDarkTheme}>
                  <SavedImage />
                </SavedLogoContainer>
                <SavedHeading isDarkTheme={isDarkTheme}>
                  Saved Videos
                </SavedHeading>
              </SavedLogoAndTextContainer>
              <SavedVideosListContainer>
                {savedList.length === 0 ? (
                  <NoSavedImageContainer>
                    <NoSavedImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                      alt="no saved videos"
                    />
                    <NoSavedText isDarkTheme={isDarkTheme}>
                      No saved videos found
                    </NoSavedText>
                    <NoSavedDes isDarkTheme={isDarkTheme}>
                      You can save your videos while watching them
                    </NoSavedDes>
                  </NoSavedImageContainer>
                ) : (
                  <>
                    {savedList.map(eachItem => (
                      <SavedVideosList
                        key={eachItem.id}
                        eachVideo={eachItem}
                        isDarkTheme={isDarkTheme}
                      />
                    ))}
                  </>
                )}
              </SavedVideosListContainer>
            </SavedVideosContainer>
          )
        }}
      </ThemeContext.Consumer>
    </SavedRouteContainer>
  </>
)

export default SavedRoute
