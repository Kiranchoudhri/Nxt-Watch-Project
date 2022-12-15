import styled from 'styled-components'

export const TrendingContainer = styled.div`
  width: 100%;
`

export const TrendingContentWrapper = styled.div`
  display: flex;
`

export const VideoItemContainer = styled.div`
  width: 75%;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const VideoItemDetailTitle = styled.p`
  color: ${props => (props.isDarkTheme ? '#f1f5f9' : '#1e293b')};
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;
`
export const VideoActionButtons = styled.div`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`
export const TimeAndViewCount = styled.div`
  display: flex;
`
export const TrendingChannelName = styled.p`
  color: #475569;
  margin-right: 16px;
  margin-bottom: 8px;
  font-size: 16px;
`
export const LikeDisLikeOptions = styled.button`
  padding-left: 0px;
  color: ${props => (props.isLikeActive ? '#2563eb' : '#64748b')};
  font-weight: 500;
  display: flex;
  align-items: center;
  margin-right: 20px;
  font-size: 20px;
  background-color: transparent;
  border-width: 0px;
  cursor: pointer;
`
export const DisLikeButton = styled(LikeDisLikeOptions)`
  color: ${props => (props.isDislikeActive ? '#2563eb' : '#64748b')};
`

export const SaveButton = styled(LikeDisLikeOptions)`
  color: ${props => (props.isSaveActive ? '#2563eb' : '#64748b')};
`

export const LikeTitle = styled.p`
  margin-left: 8px;
  font-size: 16px;
`
export const VideoContentContainer = styled.div`
  display: flex;
  margin-top: 20px;
`
export const ChannelLogo = styled.img`
  width: 60px;
  align-self: flex-start;
`

export const VideoDescription = styled.div`
  margin-left: 20px;
`
export const VideoText = styled.p`
  color: ${props => (props.isDarkTheme ? '#f1f5f9' : '#1e293b')};
  margin-bottom: 8px;
`
export const ChannelName = styled.p`
  color: #475569;
  margin-right: 16px;
  margin-bottom: 8px;
`
export const VideoItemDescription = styled(ChannelName)`
  margin-top: 30px;
  color: ${props => (props.isDarkTheme ? '#f1f5f9' : '#1e293b')};
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
`
