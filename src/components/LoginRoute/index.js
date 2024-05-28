import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import {
  LightThemeContainer,
  LightThemeCardContainer,
  ThemeImage,
  FormContainer,
  InputContainer,
  LightLabelText,
  LightInputElement,
  CheckBoxContainer,
  CheckBoxElement,
  LightCheckBoxLabelText,
  LoginButton,
  ErrorMsg,
  //   DarkThemeContainer,
  //   DarkThemeCardContainer,
  //   DarkLabelText,
} from './styledComponents'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    onCheckboxStatus: 'password',
    errorMsg: '',
    onSubmitErr: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errMsg => {
    this.setState({errorMsg: errMsg, onSubmitErr: true})
  }

  onFormSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userData = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
    }

    const response = await fetch(url, options)
    const fetchedData = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(fetchedData.jwt_token)
    } else {
      this.onSubmitFailure(fetchedData.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheckbox = event => {
    if (event.target.checked) {
      this.setState({onCheckboxStatus: 'text'})
    } else {
      this.setState({onCheckboxStatus: 'password'})
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {
      username,
      password,
      onCheckboxStatus,
      errorMsg,
      onSubmitErr,
    } = this.state

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <>
              <LightThemeContainer isDarkTheme={isDarkTheme}>
                <LightThemeCardContainer isDarkTheme={isDarkTheme}>
                  {isDarkTheme ? (
                    <ThemeImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                      alt="website logo"
                    />
                  ) : (
                    <ThemeImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="website logo"
                    />
                  )}

                  <FormContainer onSubmit={this.onFormSubmit}>
                    <InputContainer>
                      <LightLabelText
                        isDarkTheme={isDarkTheme}
                        htmlFor="usernameId"
                      >
                        USERNAME
                      </LightLabelText>
                      <LightInputElement
                        type="text"
                        id="usernameId"
                        placeholder="Username"
                        isDarkTheme={isDarkTheme}
                        onChange={this.onChangeUsername}
                        value={username}
                      />
                    </InputContainer>
                    <InputContainer>
                      <LightLabelText
                        isDarkTheme={isDarkTheme}
                        htmlFor="passwordId"
                      >
                        PASSWORD
                      </LightLabelText>
                      <LightInputElement
                        type={onCheckboxStatus}
                        id="passwordId"
                        placeholder="Password"
                        isDarkTheme={isDarkTheme}
                        onChange={this.onChangePassword}
                        value={password}
                      />
                    </InputContainer>
                    <CheckBoxContainer>
                      <CheckBoxElement
                        type="checkbox"
                        id="checkboxId"
                        onChange={this.onChangeCheckbox}
                      />
                      <LightCheckBoxLabelText
                        isDarkTheme={isDarkTheme}
                        htmlFor="checkboxId"
                      >
                        Show Password
                      </LightCheckBoxLabelText>
                    </CheckBoxContainer>
                    <LoginButton type="submit">Login</LoginButton>
                    {onSubmitErr && <ErrorMsg>* {errorMsg}</ErrorMsg>}
                  </FormContainer>
                </LightThemeCardContainer>
              </LightThemeContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginRoute

//   darkThemeView = () => (
//       <DarkThemeContainer>
//           <DarkThemeCardContainer>
//             <ThemeImage
//           src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
//           alt="website logo"
//         />

//         <FormContainer>
//           <InputContainer>
//             <DarkLabelText htmlFor="usernameId">USERNAME</DarkLabelText>
//             <DarkInputElement
//               type="text"
//               id="usernameId"
//               placeholder="Username"
//             />
//           </InputContainer>
//           <InputContainer>
//             <LightLabelText htmlFor="passwordId">PASSWORD</LightLabelText>
//             <LightInputElement
//               type="password"
//               id="passwordId"
//               placeholder="Password"
//             />
//           </InputContainer>
//           <CheckBoxContainer>
//             <CheckBoxElement type="checkbox" id="checkboxId" />
//             <LightCheckBoxLabelText htmlFor="checkboxId">
//               Show Password
//             </LightCheckBoxLabelText>
//           </CheckBoxContainer>
//           <LoginButton type="button">Login</LoginButton>
//         </FormContainer>
//           </DarkThemeCardContainer>
//       </DarkThemeContainer>
//   )
