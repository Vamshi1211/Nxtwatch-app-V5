import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {IoMdHome} from 'react-icons/io'
import {FaFire} from 'react-icons/fa'
import {GiGamepad} from 'react-icons/gi'
import {BiListPlus} from 'react-icons/bi'

export const SideBarNavContainer = styled.div`
  padding-left: 0px;
  min-height: 100vh;
  width: 25%;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const SideBarContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  padding-top: 20px;
  padding-left: 0px;
  border: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const SideBarItem = styled.div`
  list-style-type: none;
  display: flex;
  align-items: center;
  padding-left: 20px;

  background-color: ${props => props.home && props.path === '/' && '#cbd5e1'};
  background-color: ${props =>
    props.home && props.isDarkTheme && props.path === '/' && ' #313131'};
`

export const SideBarTrendingItem = styled(SideBarItem)`
  background-color: ${props => props.path === '/trending' && '#cbd5e1'};
  background-color: ${props =>
    props.isDarkTheme && props.path === '/trending' && '#313131'};
`

export const SideBarGamingItem = styled(SideBarItem)`
  background-color: ${props => props.path === '/gaming' && '#cbd5e1'};
  background-color: ${props =>
    props.isDarkTheme && props.path === '/gaming' && '#313131'};
`
export const SideBarSavedItem = styled(SideBarItem)`
  background-color: ${props => props.path === '/saved-videos' && '#cbd5e1'};
  background-color: ${props =>
    props.isDarkTheme && props.path === '/saved-videos' && '#313131'};
`

export const SideBarText = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f0')};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin-left: 15px;
`
export const HomeIcon = styled(IoMdHome)`
  height: 30px;
  width: 40px;
  color: ${props => (props.path === '/' ? '#ff0000' : '')};
`

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #1e293b;
  cursor: pointer;
  outline: none;
`

export const TrendingIcon = styled(FaFire)`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  color: ${props => (props.path === '/trending' ? '#ff0000' : '')};
`

export const GamingIcon = styled(GiGamepad)`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  color: ${props => (props.path === '/gaming' ? '#ff0000' : '')};
`
export const SavedIcon = styled(BiListPlus)`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  color: ${props => (props.path === '/saved-videos' ? '#ff0000' : '')};
`

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 35px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const ContactUsHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 22px;
  margin-bottom: 15px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : ' #1e293b')};
  font-weight: 600;
`

export const SocialMediaContacts = styled.div`
  display: flex;
  justify-content: center:
  align-items: center;
  margin-bottom: 15px;
  margin-top: 10px;
`

export const SocialMediaImage = styled.img`
  width: 40px;
  margin-right: 15px;
`

export const FooterDes = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#ffffff' : ' #1e293b')};
  font-size: 18px;
  font-weight: 600;
  margin-right: 15px;
`
