import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TrendingCard = styled.li`
  margin-bottom: 60px;
  padding-left: 0px;
  display: flex;
`
export const TrendingVideoThumbnailImage = styled.img`
  width: 50%;
`
export const TrendingVideoContentContainer = styled.div`
  margin-left: 16px;
  text-decoration: none;
`
export const TimeAndViewCount = styled.div`
  display: flex;
`

export const TrendingVideoDescription = styled.div`
  margin-left: 20px;
`
export const TrendingVideoText = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  margin-bottom: 8px;
  font-size: 24px;
`
export const TrendingChannelName = styled.p`
  color: #475569;
  margin-right: 16px;
  margin-bottom: 8px;
  font-size: 18px;
`
export const LinkElement = styled(Link)`
  text-decoration: none;
`
