import {Link, withRouter} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {
  VideoCard,
  VideoThumbnailImage,
  VideoContentContainer,
  ChannelLogo,
  VideoDescription,
  VideoText,
  ChannelName,
  HomeLinkElement,
} from './styledComponents'

const HomeVideoItem = props => {
  const {eachVideoDetail, isDarkTheme} = props
  const {
    channel,
    id,
    title,
    thumbnailUrl,
    viewCount,
    publishedAt,
  } = eachVideoDetail
  const {name, profileImageUrl} = channel

  const convertedDate = formatDistanceToNow(new Date(publishedAt))
  const timeList = convertedDate.split(' ')
  const timeInYears = `${timeList[1]} ${timeList[2]} ago`

  return (
    <HomeLinkElement to={`/videos/${id}`}>
      <VideoCard>
        <VideoThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
        <VideoContentContainer>
          <ChannelLogo src={profileImageUrl} alt="channel logo" />
          <VideoDescription>
            <VideoText isDarkTheme={isDarkTheme}>{title}</VideoText>
            <ChannelName>{name}</ChannelName>
            <VideoContentContainer>
              <ChannelName>{viewCount}</ChannelName>
              <ChannelName>{timeInYears}</ChannelName>
            </VideoContentContainer>
          </VideoDescription>
        </VideoContentContainer>
      </VideoCard>
    </HomeLinkElement>
  )
}

export default withRouter(HomeVideoItem)
