import {Link, withRouter} from 'react-router-dom'

import {
  TrendingCard,
  TrendingVideoThumbnailImage,
  TrendingVideoContentContainer,
  TrendingVideoText,
  TrendingChannelName,
  GamingLinkElement,
} from './styledComponents'

const GamingVideoItem = props => {
  const {eachVideoDetail, isDarkTheme} = props
  const {id, title, thumbnailUrl, viewCount} = eachVideoDetail

  return (
    <GamingLinkElement to={`/videos/${id}`}>
      <TrendingCard>
        <TrendingVideoThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
        <TrendingVideoContentContainer>
          <TrendingVideoText isDarkTheme={isDarkTheme}>
            {title}
          </TrendingVideoText>
          <TrendingChannelName>
            {viewCount} Watching Worldwide
          </TrendingChannelName>
        </TrendingVideoContentContainer>
      </TrendingCard>
    </GamingLinkElement>
  )
}

export default withRouter(GamingVideoItem)
