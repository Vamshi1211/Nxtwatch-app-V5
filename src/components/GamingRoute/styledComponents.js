import styled from 'styled-components'
import {GiGamepad} from 'react-icons/gi'

import {HomeContentContainer} from '../HomeContent/styledComponents'

import {
  TrendingLogoAndTextContainer,
  TrendingLogoContainer,
  TrendingHeading,
  TrendingVideoItemsContainer,
} from '../TrendingRoute/styledComponents'

export const GamingContainer = styled(HomeContentContainer)`
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`
export const GamingRouteContainer = styled.div`
  display: flex;
`
export const GamingLogoAndTextContainer = styled(TrendingLogoAndTextContainer)``

export const GamingLogoContainer = styled(TrendingLogoContainer)``

export const GamingImage = styled(GiGamepad)`
  height: 30px;
  width: 30px;
  color: #ff0000;
`

export const GamingHeading = styled(TrendingHeading)``

export const GamingRouteItemContainer = styled(TrendingVideoItemsContainer)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`
