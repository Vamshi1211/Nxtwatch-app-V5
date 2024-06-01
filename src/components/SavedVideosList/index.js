import {
  TrendingVideoInfoContainer,
  TrendingVideoTitle,
  TrendingVideoName,
  TrendingVideoViewsAndDateContainer,
  //   TrendingViews,
  //   TrendingVideoDate,
  TrendingText,
  TrendingVideoAndProfileContainer,
  TrendingProfileImage,
  TrendingNameAndViewContainer,
  Dot1,
  Dot2,
} from '../TrendingVideos/styledComponents'

import {SavedListItem, SavedImage, SavedLink} from './styledComponents'

const SavedVideosList = props => {
  const {eachVideo, isDarkTheme} = props
  const {thumbnailUrl, title, viewCount, publishedAt, id, channel} = eachVideo

  return (
    <SavedListItem>
      <SavedLink to={`/videos/${id}`}>
        <SavedImage src={thumbnailUrl} alt="video thumbnail" />

        <TrendingVideoAndProfileContainer>
          <TrendingProfileImage
            src={channel.profile_image_url}
            alt="channel logo"
          />
          <TrendingVideoInfoContainer>
            <TrendingVideoTitle isDarkTheme={isDarkTheme}>
              {title}
            </TrendingVideoTitle>
            <TrendingNameAndViewContainer>
              <TrendingVideoName isDarkTheme={isDarkTheme}>
                {channel.name}
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
      </SavedLink>
    </SavedListItem>
  )
}

export default SavedVideosList
