import styled from 'styled-components'

import {IoMoonSharp} from 'react-icons/io5'
import {FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'

export const NavbarHeader = styled.nav`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#ffffff')};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  border: none;
`
export const NavMobileContainer = styled.div`
  border: 1px solid yellow;
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

export const PopupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const PopupDisplayContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  width: 30vw;
  height: 30vh;
  border-radius: 10px;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PopupHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 16px;
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
  padding: 8px 24px 8px 24px;
`
export const ConfirmButton = styled(CancelButton)`
  color: #f9f9f9;
  background-color: #3b82f6;
  border: none;
`
