import styled from 'styled-components'
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {IoMoonSharp} from 'react-icons/io5'
import {FiLogOut} from 'react-icons/fi'
import {IoMdHome} from 'react-icons/io'
import {FaFire} from 'react-icons/fa'
import {BiListPlus} from 'react-icons/bi'

import {GiHamburgerMenu, GiGamepad} from 'react-icons/gi'

export const NavbarHeader = styled.nav`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#ffffff')};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  border: none;
`
export const NavMobileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding-top: 10px;
  padding-bottom: 10px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const NavWebContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  padding-top: 10px;
  padding-bottom: 10px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavImage = styled.img`
  width: 100px;
`
export const NavWebImage = styled.img`
  width: 150px;
`

export const NavItemsMobileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NavItemsWebContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ProfileImage = styled.img`
  width: 36px;
  height: 36px;
`

export const ThemeChangeControllerButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-right: 8px;
  @media screen and (min-width: 768px) {
    margin-right: 24px;
  }
`
export const HamBurgerIconButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-right: 8px;
  @media screen and (min-width: 768px) {
    margin-right: 24px;
  }
`

export const LogoutIconButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    color: #3b82f6;
    border: 1px solid #3b82f6;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 8px;
    padding-bottom: 8px;
    font-size: 16px;
    font-family: 'Roboto';
    font-weight: 600;
    border-radius: 8px;
  }
`

export const IoMoon = styled(IoMoonSharp)`
  width: 20px;
  height: 20px;
  color: ${props => (props.isdarktheme === 'true' ? '#ffffff' : '')};
  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`

export const FiLogOutIcon = styled(FiLogOut)`
  width: 20px;
  height: 20px;
  color: ${props => (props.isdarktheme === 'true' ? '#ffffff' : '')};
  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`
export const GiHamburgerMenuIcon = styled(GiHamburgerMenu)`
  width: 20px;
  height: 20px;
  color: ${props => (props.isdarktheme === 'true' ? '#ffffff' : '')};
`

// export const CustomPopup = styled(Popup)`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #000000;
//   width: 100%;
// `

export const PopupContainer = styled(Popup)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
`

export const PopupDisplayContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  width: 90vw;
  height: 30vh;
  border-radius: 10px;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 576px) {
    width: 50vw;
    height: 30vh;
  }
`
export const PopupHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 16px;
  text-align: center;
`
export const PopupButtons = styled.div`
  display: flex;
  margin-top: 30px;
`

export const CancelButton = styled.button`
  cursor: pointer;
  outline: none;
  border-radius: 4px;
  background-color: transparent;
  color: #7e858e;
  font-weight: 500;
  line-height: 1.5;
  border: 1px solid #d7dfe9;
  margin-right: 25px;
  padding: 6px 18px 6px 18px;
  @media screen and (min-width: 576px) {
    padding: 8px 24px 8px 24px;
  }
`
export const ConfirmButton = styled(CancelButton)`
  color: #f9f9f9;
  background-color: #3b82f6;
  border: none;
`
export const PopupMenuContainer = styled.ul`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  padding-left: 0px;
`
export const NavHomeListItem = styled.li`
  list-style-type: none;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.path === '/' && props.home && '#ebebeb'};
  background-color: ${props =>
    props.home && props.isDarkTheme && props.path === '/' && ' #313131'};
`
export const NavTrendingListItem = styled(NavHomeListItem)`
  background-color: ${props => props.path === '/trending' && '#ebebeb'};
  background-color: ${props =>
    props.isDarkTheme && props.path === '/trending' && ' #313131'};
`

export const NavGamingListItem = styled(NavHomeListItem)`
  background-color: ${props => props.path === '/gaming' && '#ebebeb'};
  background-color: ${props =>
    props.isDarkTheme && props.path === '/gaming' && ' #313131'};
`

export const NavSavedListItem = styled(NavHomeListItem)`
  background-color: ${props => props.path === '/saved-videos' && '#ebebeb'};
  background-color: ${props =>
    props.isDarkTheme && props.path === '/saved-videos' && ' #313131'};
`

export const HomeNavItemContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #181818;
  width: 100%;
`
export const HomeLogo = styled(IoMdHome)`
  height: 30px;
  width: 30px;
  color: ${props => (props.path === '/' ? '#ff0000' : ' #616e7c')};
`
export const TrendingLogo = styled(FaFire)`
  height: 30px;
  width: 30px;
  color: ${props => (props.path === '/trending' ? '#ff0000' : ' #616e7c')};
`
export const GamingLogo = styled(GiGamepad)`
  height: 30px;
  width: 30px;
  color: ${props => (props.path === '/gaming' ? '#ff0000' : ' #616e7c')};
`

export const SavedLogo = styled(BiListPlus)`
  height: 30px;
  width: 30px;
  color: ${props => (props.path === '/saved-videos' ? '#ff0000' : ' #616e7c')};
`

export const HomeText = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  text-align: left;
  width: 100px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  margin-left: 25px;
`
