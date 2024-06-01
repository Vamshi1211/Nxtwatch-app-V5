import styled from 'styled-components'
import {FaFire} from 'react-icons/fa'
import {HomeContentContainer} from '../HomeContent/styledComponents'

import {
  TrendingLogoAndTextContainer,
  TrendingLogoContainer,
  TrendingHeading,
} from '../TrendingRoute/styledComponents'

export const SavedRouteContainer = styled(HomeContentContainer)`
  display: flex;
  width: 100%;
`

export const SavedVideosContainer = styled.div`
  padding-left: 0px;
  margin-top: 0px;
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`
export const SavedLogoAndTextContainer = styled(TrendingLogoAndTextContainer)``

export const SavedLogoContainer = styled(TrendingLogoContainer)``

export const SavedImage = styled(FaFire)`
  height: 30px;
  width: 30px;
  color: #ff0000;
`

export const SavedHeading = styled(TrendingHeading)``

export const SavedVideosListContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: column;
`
export const NoSavedImageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoSavedImage = styled.img`
  width: 50%;
`
export const NoSavedText = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 0px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
  text-align: center;
`
export const NoSavedDes = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
  text-align: center;
`
