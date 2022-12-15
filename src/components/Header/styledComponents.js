import styled from 'styled-components'

export const HeaderComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 120px 30px 60px;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`
export const WebsiteLogoHeader = styled.img`
  width: 150px;
`
export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
`
export const ProfileLogo = styled(WebsiteLogoHeader)`
  width: 40px;
  margin-right: 30px;
  margin-left: 40px;
`

export const ThemeButton = styled.button`
  color: ${props => props.isDarkTheme && '#ffffff'};
  background-color: transparent;
  border-width: 0px;
  font-size: 24px;
`
