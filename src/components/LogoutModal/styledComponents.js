import styled from 'styled-components'

export const CustomLogoutButton = styled.button`
  border: 1px solid #3b82f6;
  background-color: #ffffff;
  padding: 8px 16px;
  border-radius: 4px;
  color: #3b82f6;
  font-size: 14px;
  cursor: pointer;
`

export const PopupWrapper = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  padding: 30px 60px;
  border-radius: 6px;
`

export const PopupMessage = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  margin-bottom: 40px;
`
export const ButtonOptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ConfirmButton = styled(CustomLogoutButton)`
  background-color: #3b82f6;
  color: #ffffff;
  border-width: 0px;
`
export const CancelButton = styled(CustomLogoutButton)`
  background-color: transparent;
  border: 1px solid #424242;
  color: #424242;
  margin-right: 30px;
`
export const DarkThemeLogoutButton = styled(CustomLogoutButton)`
  border: 1px solid #ebebeb;
  border-radius: 2px;
  color: #ffffff;
  background-color: transparent;
`
