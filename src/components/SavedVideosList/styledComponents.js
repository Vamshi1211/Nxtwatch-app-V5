import styled from 'styled-components'

export const SavedListItem = styled.li`
  list-style-type: none;
  padding-bottom: 20px;
  padding-top: 20px;
  @media screen and (min-width: 576px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`
export const SavedImage = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 0px;
  @media screen and (min-width: 576px) {
    width: 40%;
    height: 250px;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
    height: 180px;
  }
`
export const SavedLink = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  text-decoration: none;
  @media screen and (min-width: 576px) {
    display: flex;
    flex-direction: row;
  }
`
