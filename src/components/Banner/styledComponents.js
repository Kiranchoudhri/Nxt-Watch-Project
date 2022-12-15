import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const BannerContainer = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;

  padding: 10px 24px;
  font-family: Roboto;
  background-color: ${props => props.isDarkTheme && '#212121'};
`
export const BannerFeaturesList = styled.ul`
  list-style-type: none;
`
export const BannerFeaturesItem = styled.li`
  padding: 14px 16px;
  padding-left: 0px;
  display: flex;
  align-items: center;
  font-size: 18px;
`
export const ItemText = styled.p`
  margin-left: 24px;
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#606060')};
`
export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 45vh;
`
export const ContactTitle = styled.p`
  margin-bottom: 20px;
  font-size: 24px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
`

export const SocialMediaIcons = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

export const SocialMediaLogo = styled.img`
  width: 30px;
  margin-right: 16px;
`
export const ContactText = styled.p`
  font-size: 18px;
  font-weight: 700;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#606060')};
  line-height: 28px;
`
export const BannerLinkElement = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #606060;
`
