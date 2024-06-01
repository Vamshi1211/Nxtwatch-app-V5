import {
  GamingVideoListItem,
  GameImage,
  GameInfoContainer,
  GameTitle,
  GameViewCount,
  GameLink,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const GamingVideos = props => {
  const {eachVideo} = props
  const {thumbnailUrl, viewCount, title, id} = eachVideo

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <GamingVideoListItem>
            <GameLink to={`videos/${id}`}>
              <GameImage src={thumbnailUrl} alt="video thumbnail" />
              <GameInfoContainer>
                <GameTitle isDarkTheme={isDarkTheme}>{title}</GameTitle>
                <GameViewCount isDarkTheme={isDarkTheme}>
                  {viewCount} Watching Worldwide
                </GameViewCount>
              </GameInfoContainer>
            </GameLink>
          </GamingVideoListItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GamingVideos
