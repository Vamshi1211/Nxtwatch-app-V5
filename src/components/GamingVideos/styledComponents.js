import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GamingVideoListItem = styled.li`
  list-style-type: none;
  width: 45%;
  margin-bottom: 20px;
  margin-top: 20px;
  @media screen and (min-width: 576px) {
    width: 30%;
  }
`
export const GameLink = styled(Link)`
  text-decoration: none;
`

export const GameImage = styled.img`
  width: 100%;
  border-radius: 10px;
`

export const GameInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const GameTitle = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#212121')};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 0px;
  line-height: 1.5;
  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
`
export const GameViewCount = styled.p`
  color: ${props => (props.isDarkTheme ? '#cbd5e1' : '#7e858e')};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: ${props => (props.isDarkTheme ? 400 : 500)};
  @media screen and (min-width: 576px) {
    font-size: 16px;
  }
`
