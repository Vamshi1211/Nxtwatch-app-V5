import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'

export const TrendingVideoListItem = styled.li`
  list-style-type: none;
  margin-bottom: 40px;
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 95%;
  }
  @media screen and (min-width: 768px) {
    width: 90%;
  }
`
export const VideoLink = styled(Link)`
  cursor: pointer;
  outline: none;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  width: 100%;
  @media screen and (min-width: 576px) {
    display: flex;
    flex-direction: row;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`

export const TrendingVideoImage = styled.img`
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 40%;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
  }
  //   @media screen and (min-width: 576px) {
  //     width: 250px;
  //     height: 200px;
  //   }
  //   @media screen and (min-width: 768px) {
  //     width: 230px;
  //     height: 250px;
  //   }
  //   @media screen and (min-width: 992px) {
  //     width: 300px;
  //     height: 250px;
  //   }
  //   @media screen and (min-width: 1000px) {
  //     width: 400px;
  //     height: 250px;
  //   }
`

export const TrendingVideoAndProfileContainer = styled.div`
  display: flex;
  padding-top: 15px;
  padding-left: 8px;
`

export const TrendingProfileImage = styled.img`
  width: 30px;
  height: 30px;
  align-self: center;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const TrendingVideoInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;

  @media screen and (min-width: 575px) {
    justify-content: flex-start;
    margin-left: 15px;
  }
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    margin-left: 20px;
  }
`

export const TrendingVideoTitle = styled.h1`
  color: ${props => (props.isDarkTheme ? '#f1f5f9' : '#313131')};
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 8px;
  margin-top: 0px;

  @media screen and (min-width: 575px) {
    font-size: 20px;
    margin-top: 0px;
  }
  @media screen and (min-width: 768px) {
    font-size: 22px;
    margin-top: 0px;
  }
`

export const TrendingVideoName = styled.p`
  color: ${props => (props.isDarkTheme ? '#d7dfe9' : '#909090')};
  font-family: 'Roboto';
  font-size: 12px;
  line-height: 1.5;
  margin-bottom: 0px;
  margin-top: 6px;
  font-weight: 500;
  @media screen and (min-width: 350px) {
    font-size: 14px;
  }
  @media screen and (min-width: 576px) {
    font-size: 16px;
  }
`

export const TrendingVideoViewsAndDateContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 4px;
  @media screen and (min-width: 576px) {
    align-items: center;
  }
`

// export const TrendingViews = styled.li`

// `
export const TrendingText = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#d7dfe9' : '#909090')};
  font-size: 10px;
  margin-top: 4px;
  line-height: 1.5;
  margin-bottom: 0px;
  @media screen and (min-width: 350px) {
    font-size: 12px;
  }
  @media screen and (min-width: 576px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

// export const TrendingVideoDate = styled.li`
//   color: #909090;
//   margin-left: 25px;
//   @media screen and(min-width: 576px) {
//     margin-left: 25px;
//   }
//   @media screen and(min-width: 768px) {
//     margin-left: 25px;
//   }
// `
export const TrendingNameAndViewContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 0px;
  width: 100%;
  @media screen and (min-width: 576px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`
export const Dot1 = styled(BsDot)`
  padding-top: 3px;
  width: 25px;
  height: 25px;
  color: ${props => (props.isdarktheme === 'true' ? '#ffffff' : '#181818')};
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const Dot2 = styled(BsDot)`
  padding-top: 3px;
  width: 25px;
  height: 25px;
  color: ${props => (props.isdarktheme === 'true' ? '#ffffff' : '#181818')};
  @media screen and (min-width: 576px) {
    padding-top: 6px;
  }
`
