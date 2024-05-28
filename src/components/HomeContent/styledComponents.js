import styled from 'styled-components'
import {IoMdClose, IoIosSearch} from 'react-icons/io'

export const HomeContentContainer = styled.div`
  width: 75%;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f4f4f4')};
  min-height: 100vh;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const BannerImageContainer = styled.div`
  height: 30vh;
  width: 100%;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  display: flex;
  justify-content: space-between;
  padding: 20px;
`
export const BannerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const BannerImage = styled.img`
  width: 200px;
  margin-bottom: 8px;
  @media screen and (max-width: 768px) {
    width: 160px;
  }
`
export const BannerHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  margin-bottom: 28px;
`
export const BannerButton = styled.button`
  border: 1px solid #1e293b;
  color: #1e293b;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  width: 120px;
  height: 40px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
`

export const BannerCloseButton = styled.button`
  background-color: transparent;
  cursor: pointer;
  outline: none;
  align-self: flex-start;
  border: none;
`
export const CrossIcon = styled(IoMdClose)`
  width: 25px;
  height: 25px;
`
export const SearchBarContainer = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
  border: 1px solid ${props => (props.isDarkTheme ? '#424242' : '#616e7c')};
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`
export const SearchBarInput = styled.input`
  width: 90%;
  padding-left: 15px;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: transparent;
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  border: none;
  outline: none;
`

export const SearchButton = styled.button`
  cursor: pointer;
  padding: 6px 36px 6px 36px;
  text-align: center;
  outline: none;
  background-color: ${props => (props.isDarkTheme ? '#313131' : '#f1f5f9')};
  border: 1px solid ${props => (props.isDarkTheme ? '#424242' : '#cbd5e1')};
  @media screen and (max-width: 768px) {
    padding: 6px 24px 6px 24px;
  }
`

export const SearchIcon = styled(IoIosSearch)`
  height: 24px;
  width: 24px;
  color: ${props => (props.isdarktheme === 'true' ? '#cbd5e1' : '')};
`

export const HomeVideosListContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const HomeVideoListItem = styled.li`
  list-style-type: none;
  width: 20%;
  border: 1px solid red;
`
