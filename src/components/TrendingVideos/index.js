import {
  TrendingVideoListItem,
  TrendingVideoImage,
  TrendingVideoInfoContainer,
  TrendingVideoTitle,
  TrendingVideoName,
  TrendingVideoViewsAndDateContainer,
  //   TrendingViews,
  //   TrendingVideoDate,
  TrendingText,
  TrendingVideoAndProfileContainer,
  TrendingProfileImage,
  VideoLink,
  TrendingNameAndViewContainer,
  Dot1,
  Dot2,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const TrendingVideos = props => {
  const {eachVideo} = props
  const {
    id,
    thumbnailUrl,
    profileImageUrl,
    viewCount,
    title,
    name,
    publishedAt,
  } = eachVideo

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <TrendingVideoListItem>
            <VideoLink to={`/videos/${id}`}>
              <TrendingVideoImage src={thumbnailUrl} alt="thumbnail" />

              <TrendingVideoAndProfileContainer>
                <TrendingProfileImage
                  src={profileImageUrl}
                  alt="channel logo"
                />
                <TrendingVideoInfoContainer>
                  <TrendingVideoTitle isDarkTheme={isDarkTheme}>
                    {title}
                  </TrendingVideoTitle>
                  <TrendingNameAndViewContainer>
                    <TrendingVideoName isDarkTheme={isDarkTheme}>
                      {name}
                    </TrendingVideoName>
                    <TrendingVideoViewsAndDateContainer>
                      <Dot1 isdarktheme={isDarkTheme.toString()} />
                      <TrendingText isDarkTheme={isDarkTheme}>
                        {viewCount} views
                      </TrendingText>
                      <Dot2 isdarktheme={isDarkTheme.toString()} />
                      <TrendingText isDarkTheme={isDarkTheme}>
                        {publishedAt} years ago
                      </TrendingText>
                    </TrendingVideoViewsAndDateContainer>
                  </TrendingNameAndViewContainer>
                </TrendingVideoInfoContainer>
              </TrendingVideoAndProfileContainer>
            </VideoLink>
          </TrendingVideoListItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default TrendingVideos
