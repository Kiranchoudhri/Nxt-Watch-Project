import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginPage,
  FormCard,
  WebsiteLogo,
  UsernameWrapper,
  LabelElement,
  InputElement,
  CheckboxElement,
  ShowPasswordLabel,
  InputCheckbox,
  SubmitButton,
  ErrorMessage,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isDarkTheme: false,
    isChecked: false,
    isError: false,
    errorMessage: '',
  }

  togglePassword = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({isError: true, errorMessage: errorMsg})
  }

  updateUsername = e => {
    this.setState({username: e.target.value})
  }

  updatePassword = e => {
    this.setState({password: e.target.value})
  }

  validateInputs = async e => {
    e.preventDefault()
    const {username, password} = this.state
    const newUser = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(newUser),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
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
      isDarkTheme,
      isChecked,
      isError,
      errorMessage,
    } = this.state
    return (
      <LoginPage>
        <FormCard>
          <WebsiteLogo
            alt="website Logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          />
          <form onSubmit={this.validateInputs}>
            <UsernameWrapper>
              <LabelElement htmlFor="nameInput">USERNAME</LabelElement>
              <InputElement
                type="text"
                id="nameInput"
                placeholder="Username"
                onChange={this.updateUsername}
                value={username}
              />
            </UsernameWrapper>
            <UsernameWrapper>
              <LabelElement htmlFor="passwordInput">PASSWORD</LabelElement>
              <InputElement
                type={isChecked ? 'text' : 'password'}
                id="passwordInput"
                placeholder="Password"
                onChange={this.updatePassword}
                value={password}
              />
            </UsernameWrapper>
            <CheckboxElement>
              <InputCheckbox
                type="checkbox"
                id="showPassword"
                checked={isChecked}
                onChange={this.togglePassword}
              />
              <ShowPasswordLabel htmlFor="showPassword">
                Show Password
              </ShowPasswordLabel>
            </CheckboxElement>
            <SubmitButton type="submit">Login</SubmitButton>
            {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
          </form>
        </FormCard>
      </LoginPage>
    )
  }
}

export default Login
