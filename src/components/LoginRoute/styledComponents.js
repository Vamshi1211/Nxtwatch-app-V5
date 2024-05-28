import styled from 'styled-components'

export const LightThemeContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LightThemeCardContainer = styled.div`
  width: 90%;
  max-width: 500px;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f8fafc')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);
  padding-top: 40px;
  padding-bottom: 40px;
  border-radius: 10px;
`

export const ThemeImage = styled.img`
  width: 150px;
  margin-bottom: 40px;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const LightLabelText = styled.label`
    color: ${props => (props.isDarkTheme ? '#ffffff' : '#475569')} ;
    font-family: "Roboto"
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 8px;
`

export const LightInputElement = styled.input`
  width: 100%;
  padding: 8px 10px 8px 10px;
  outline: none;
  border: 1px solid ${props => (props.isDarkTheme ? '#ffffff' : '#475569')};
  border-radius: 4px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#475569')};
  font-family: 'Roboto';
  font-weight: 500;
  background-color: transparent;
`
export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  //   border: 1px solid red;
  margin-bottom: 30px;
`

export const CheckBoxElement = styled.input`
  width: 18px;
  height: 18px;
  margin-left: 0px;
  margin-right: 10px;
`

export const LightCheckBoxLabelText = styled.label`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  @media screen and (min-width: 576px){
      font-size
  }
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-family: 'Roboto';
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`

export const ErrorMsg = styled.p`
  color: #ff0000;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
`
