import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoCard = styled.li`
  width: 300px;
  margin-bottom: 60px;
  margin-right: 20px;
  padding-left: 0px;
  flex-grow: 1;
`
export const VideoThumbnailImage = styled.img`
  width: 100%;
  margin-bottom: 16px;
`
export const VideoContentContainer = styled.div`
  display: flex;
`
export const ChannelLogo = styled.img`
  width: 60px;
  align-self: flex-start;
`

export const VideoDescription = styled.div`
  margin-left: 20px;
`
export const VideoText = styled.p`
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#1e293b')};
  margin-bottom: 8px;
`
export const ChannelName = styled.p`
  color: #475569;
  margin-right: 16px;
  margin-bottom: 8px;
`
export const HomeLinkElement = styled(Link)`
  text-decoration: none;
`
