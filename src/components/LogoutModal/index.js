import Popup from 'reactjs-popup'
import {
  CustomLogoutButton,
  PopupWrapper,
  PopupMessage,
  ButtonOptionsContainer,
  CancelButton,
  ConfirmButton,
  DarkThemeLogoutButton,
} from './styledComponents'

const LogoutModal = props => {
  const {onClickLogout, isDarkTheme} = props
  const overlayStyles = {
    backgroundColor: 'rgba(0,0,0,0.5)',
  }

  const confirmLogout = () => {
    onClickLogout()
  }

  return (
    <Popup
      modal
      trigger={
        isDarkTheme ? (
          <DarkThemeLogoutButton type="button">Logout</DarkThemeLogoutButton>
        ) : (
          <CustomLogoutButton type="button">Logout</CustomLogoutButton>
        )
      }
      overlayStyle={overlayStyles}
    >
      {close => (
        <>
          <PopupWrapper isDarkTheme={isDarkTheme}>
            <PopupMessage isDarkTheme={isDarkTheme}>
              Are you sure, you want to logout?
            </PopupMessage>
            <ButtonOptionsContainer>
              <CancelButton type="button" onClick={() => close()}>
                Cancel
              </CancelButton>
              <ConfirmButton type="button" onClick={confirmLogout}>
                Confirm
              </ConfirmButton>
            </ButtonOptionsContainer>
          </PopupWrapper>
        </>
      )}
    </Popup>
  )
}

export default LogoutModal
