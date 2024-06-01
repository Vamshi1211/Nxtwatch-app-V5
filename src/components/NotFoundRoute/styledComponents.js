import styled from 'styled-components'

import {HomeContentContainer} from '../HomeContent/styledComponents'

export const NotFoundRouteContainer = styled(HomeContentContainer)`
  display: flex;

  width: 100%;
`
export const NotFoundContainer = styled(HomeContentContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`
export const NotFoundImage = styled.img`
  width: 50%;
`

export const NotFoundHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
  font-family: 'Roboto';
  font-size: 24px;
  text-align: center;
`

export const NotFoundDes = styled.p`
  color: ${props => (props.isDarkTheme ? '#cccccc' : '#424242')};
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`
