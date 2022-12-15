import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TrendingCard = styled.li`
  margin-bottom: 60px;
  padding-left: 0px;
  margin-right: 20px;
  flex-grow: 1;
`
export const TrendingVideoThumbnailImage = styled.img`
  width: 290px;
  margin-bottom: 24px;
`
export const TrendingVideoContentContainer = styled.div`
  margin-left: 16px;
`

export const TrendingVideoDescription = styled.div`
  margin-left: 20px;
`
export const TrendingVideoText = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: 600;
`
export const TrendingChannelName = styled.p`
  color: #475569;
  margin-right: 16px;
  margin-bottom: 8px;
  font-size: 16px;
`
export const GamingLinkElement = styled(Link)`
  text-decoration: none;
`
