import {
  HomeVideoListItem,
  ProfileImage,
  ProfileInfoContainer,
  ProfileLogo,
  ProfileInfoTextContainer,
  ProfileTitle,
  ProfileName,
  ProfileViewAndDateContainer,
  ProfileViewCount,
  ProfilePublishedDate,
  EachHomeLink,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const HomeContentItems = props => {
  const {eachHomeItem} = props
  const {
    channel,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
    id,
  } = eachHomeItem

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <HomeVideoListItem>
            <EachHomeLink to={`/videos/${id}`}>
              <ProfileImage src={thumbnailUrl} alt="video thumbnail" />
              <ProfileInfoContainer>
                <ProfileLogo
                  src={channel.profile_image_url}
                  alt="channel logo"
                />
                <ProfileInfoTextContainer>
                  <ProfileTitle isDarkTheme={isDarkTheme}>{title}</ProfileTitle>
                  <ProfileName isDarkTheme={isDarkTheme}>
                    {channel.name}
                  </ProfileName>
                  <ProfileViewAndDateContainer>
                    <ProfileViewCount isDarkTheme={isDarkTheme}>
                      {viewCount}
                    </ProfileViewCount>
                    <ProfilePublishedDate isDarkTheme={isDarkTheme}>
                      {publishedAt}
                    </ProfilePublishedDate>
                  </ProfileViewAndDateContainer>
                </ProfileInfoTextContainer>
              </ProfileInfoContainer>
            </EachHomeLink>
          </HomeVideoListItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default HomeContentItems
