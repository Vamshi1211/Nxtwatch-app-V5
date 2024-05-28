import styled from 'styled-components'
import {IoMoonSharp} from 'react-icons/io5'
import {FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'

export const NavbarHeader = styled.nav`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
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
