import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const EachHomeLink = styled(Link)`
  text-decoration: none;
`

export const HomeVideoListItem = styled.li`
  list-style-type: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 18px;
  margin-bottom: 20px;
  @media screen and (min-width: 576px) {
    width: 46%;
  }
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`
export const ProfileImage = styled.img`
  width: 100%;
`
export const ProfileInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: center;
  margin-top: 10px;
`

export const ProfileLogo = styled.img`
  width: 15%;
  align-self: flex-start;
  margin-top: 10px;
`

export const ProfileInfoTextContainer = styled.div`
  width: 80%;
`

export const ProfileTitle = styled.h1`
  color: ${props => (props.isDarkTheme ? '#f8fafc' : '#231f20')};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`
export const ProfileName = styled.p`
  font-family: 'Roboot';
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 0px;
  color: #64748b;
  line-height: 1.5;
  margin-top: 0px;
`
export const ProfileViewAndDateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0px;
`

export const ProfilePublishedDate = styled.p`
  font-family: 'Roboot';
  font-size: 16px;
  font-weight: 500;
  color: #64748b;
  margin-left: 10px;
  line-height: 1.5;
  margin-top: 4px;
`

export const ProfileViewCount = styled.p`
  font-family: 'Roboot';
  font-size: 16px;
  color: #64748b;
  font-weight: 500;
  line-height: 1.5;
  margin-top: 4px;
`
