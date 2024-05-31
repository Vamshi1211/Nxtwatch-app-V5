import styled from 'styled-components'
import {FaFire} from 'react-icons/fa'
import {HomeContentContainer} from '../HomeContent/styledComponents'

export const TrendingVideosContainer = styled(HomeContentContainer)`
  display: flex;
  width: 100%;
`
export const TrendingVideoItemContainer = styled(HomeContentContainer)`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`
export const TrendingLogoAndTextContainer = styled.div`
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  display: flex;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 60px;
  @media screen and (max-width: 768px) {
    padding-left: 30px;
  }
`

export const TrendingLogoContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#cbd5e1')};
  padding: 30px;
  border-radius: 100%;
  margin-right: 20px;
`

export const TrendingImage = styled(FaFire)`
  height: 30px;
  width: 30px;
  color: #ff0000;
`
export const TrendingHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#231f20')};
  font-weight: 600;
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`
export const TrendingVideoItemsContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
