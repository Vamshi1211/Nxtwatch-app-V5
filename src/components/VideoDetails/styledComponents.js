import styled from 'styled-components'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import {HomeContentContainer} from '../HomeContent/styledComponents'

export const VideoItemContainer = styled(HomeContentContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  //   border: 1px solid red;
  width: 90%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const VideoPlayerDes = styled.p`
  font-family: 'Roboto';
  color: #1e293b;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
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
`

export const VideoPlayerViewListContainer = styled.li`
  list-style-type: none;
  margin-right: 25px;
`
export const VideoPlayerParagraph = styled.p`
    color: #475569;
    font-family: "Roboto"
    font-size: 14px;
    font-weight: 500;
    line-height: 1.5;
    @media screen and (min-width: 768px){
        font-size: 14px;
    }
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
  @media screen and (min-width: 768px) {
    margin-right: 8px;
  }
`
export const DisLikeIcon = styled(AiOutlineDislike)`
  height: 20px;
  width: 20px;
  margin-right: 6px;
  @media screen and (min-width: 768px) {
    margin-right: 8px;
  }
`

export const SavedIcon = styled(BiListPlus)`
  height: 20px;
  width: 20px;
  margin-right: 6px;
  @media screen and (min-width: 768px) {
    margin-right: 8px;
  }
`

export const LikeButton = styled.button`
  cursor: pointer;
  color: #475569;
  font-family: 'Roboto';
  font-weight: 500;
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
