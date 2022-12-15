import {FaMoon} from 'react-icons/fa'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FiSun} from 'react-icons/fi'
import {
  HeaderComponent,
  WebsiteLogoHeader,
  OptionsContainer,
  ProfileLogo,
  ThemeButton,
} from './styledComponents'
import LogoutModal from '../LogoutModal'

const Header = props => {
  const {onClickToggleTheme, isDarkTheme} = props

  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  const onClickChangeTheme = () => {
    onClickToggleTheme()
  }

  return (
    <HeaderComponent isDarkTheme={isDarkTheme}>
      <Link to="/">
        <WebsiteLogoHeader
          alt="website logo"
          src={
            isDarkTheme
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          }
        />
      </Link>
      <OptionsContainer>
        <ThemeButton
          type="button"
          onClick={onClickChangeTheme}
          isDarkTheme={isDarkTheme}
          data-testid="theme"
        >
          {isDarkTheme ? <FiSun /> : <FaMoon />}
        </ThemeButton>
        <ProfileLogo
          alt="profile"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png "
        />
        <LogoutModal onClickLogout={onClickLogout} isDarkTheme={isDarkTheme} />
      </OptionsContainer>
    </HeaderComponent>
  )
}

export default withRouter(Header)
