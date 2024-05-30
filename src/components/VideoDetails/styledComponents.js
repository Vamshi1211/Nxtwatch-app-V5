import styled from 'styled-components'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import {
  HomeContentContainer,
  LoaderContainer,
  LoaderSpinner,
} from '../HomeContent/styledComponents'

export const VideoItemContainer = styled(HomeContentContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  //   border: 1px solid red;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f ' : '#f9f9f9 ')}
  width: 90%;
  padding-top: 20px;
  padding-bottom: 40px;
  min-height: 100vh;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const VideoPlayerDes = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  margin-top: 30px;
  margin-bottom: 0px;
`

export const VideoPlayerTextContainer = styled.div`
  width: 85%;
  @media screen and (max-width: 576px) {
    width: 95%;
  }
`
export const VideoPlayerViewsAndLikeContainer = styled.div`
  padding-left: 0px;
  margin-bottom: 0px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

export const VideoPlayerViewAndDateContainer = styled.ul`
  display: flex;
  padding-left: 0px;
  margin-bottom: 0px;
`

export const VideoPlayerViewListContainer = styled.li`
  list-style-type: none;
  margin-right: 25px;
`
export const VideoPlayerParagraph = styled.p`
    color: #909090;
    font-family: "Roboto"
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    @media screen and (min-width: 768px){
        font-size: 14px;
    }
`

export const LikeIconParagraph = styled(VideoPlayerParagraph)`
  color: ${props => (props.isLike ? ' #00306e' : '')};
`

export const DisLikeParagraph = styled(VideoPlayerParagraph)`
  color: ${props => (props.isDislike ? ' #00306e' : '')};
`

export const SavedParagraph = styled(VideoPlayerParagraph)`
  color: ${props => (props.isSave ? ' #00306e' : '')};
`

export const VideoPlayerDateListContainer = styled.li`
  color: #475569;
`

export const VideoPlayerLikesAndSaveContainer = styled.ul`
  padding-left: 0px;
  display: flex;

  //   border: 1px solid red;
  @media screen and (max-width: 768px) {
    margin-top: 0px;
  }
`

export const LikeDisLikeSaveContainer = styled.li`
  list-style-type: none;
  display: flex;
  padding-left: 0px;
  margin-left: 0px;
`
export const LikeIcon = styled(AiOutlineLike)`
  height: 20px;
  width: 20px;
  margin-right: 6px;
  padding-left: 0px;
  margin-left: 0px;
  color: ${props => (props.isLike ? ' #00306e' : '')};
  @media screen and (min-width: 768px) {
    margin-right: 8px;
  }
`
export const DisLikeIcon = styled(AiOutlineDislike)`
  height: 20px;
  width: 20px;
  margin-right: 6px;
  color: ${props => (props.isDislike ? ' #00306e' : '')};
  @media screen and (min-width: 768px) {
    margin-right: 8px;
  }
`

export const SavedIcon = styled(BiListPlus)`
  height: 20px;
  width: 20px;
  margin-right: 6px;
  color: ${props => (props.isSave ? ' #00306e' : '')};
  @media screen and (min-width: 768px) {
    margin-right: 8px;
  }
`

export const LikeButton = styled.button`
  cursor: pointer;
  color: ${props => (props.isLike ? ' #00306e' : '#475569')};
  font-family: 'Roboto';
  font-weight: 600;
  display: flex;
  justify-content: 'center';
  align-items: center;
  font-size: 16px;
  outline: none;
  background-color: transparent;
  padding: 0px 10px 0px 0px;
  border: none;
  margin-left: 0px;
  @media screen and (min-width: 768px) {
    padding: 0px 15px 0px 15px;
  }
`

export const DisLikeButton = styled(LikeButton)`
  color: ${props => (props.isDislike ? ' #00306e' : '#475569')};
`

export const SavedButton = styled(LikeButton)`
  color: ${props => (props.isSave ? ' #00306e' : '#475569')};
`

export const HorizontalLine = styled.hr`
  width: 85%;
  color: #475569;
  @media screen and (max-width: 768px) {
    width: 95%;
  }
`
export const VideoProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  @media screen and (max-width: 768px) {
    width: 95%;
  }
`
export const VideoProfileAndLogoContainer = styled.div`
  display: flex;
`

export const VideoProfileImage = styled.img`
  width: 60px;
  margin-top: 15px;
  align-self: flex-start;
`

export const VideoProfileTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`

export const VideoChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  color: ${props => (props.isDarkTheme ? '#cccccc' : '#313131')};
  margin-bottom: 0px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const VideoSubscriberCount = styled(VideoChannelName)`
  color: #909090;
  margin-bottom: 4px;
  font-weight: 500;
`
export const VideoDescription = styled(VideoChannelName)`
  color: ${props => (props.isDarkTheme ? '#cccccc' : ' #475569')};
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`
export const VideoMobileDescription = styled(VideoChannelName)`
  color: ${props => (props.isDarkTheme ? '#cccccc' : ' #475569')};
  display: block;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LoaderVideoContainer = styled(LoaderContainer)`
  width: 90%;
`

export const LoaderVideoSpinner = styled(LoaderSpinner)``
