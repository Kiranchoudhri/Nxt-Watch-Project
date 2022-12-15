import {Link, withRouter} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import {
  TrendingCard,
  TrendingVideoThumbnailImage,
  TrendingVideoContentContainer,
  TrendingVideoText,
  TrendingChannelName,
  TimeAndViewCount,
  LinkElement,
} from './styledComponents'

const TrendingVideoItem = props => {
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
    <LinkElement to={`/videos/${id}`}>
      <TrendingCard>
        <TrendingVideoThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
        <TrendingVideoContentContainer>
          <TrendingVideoText isDarkTheme={isDarkTheme}>
            {title}
          </TrendingVideoText>
          <TrendingChannelName>{name}</TrendingChannelName>
          <TimeAndViewCount>
            <TrendingChannelName>{viewCount}</TrendingChannelName>
            <TrendingChannelName>{timeInYears}</TrendingChannelName>
          </TimeAndViewCount>
        </TrendingVideoContentContainer>
      </TrendingCard>
    </LinkElement>
  )
}

export default withRouter(TrendingVideoItem)
