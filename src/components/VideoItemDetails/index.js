import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import Header from '../Header'
import Banner from '../Banner'
import FailureEmptyView from '../FailureEmptyView'
import {
  TrendingContainer,
  TrendingContentWrapper,
  VideoItemContainer,
  VideoItemDetailTitle,
  TimeAndViewCount,
  TrendingChannelName,
  VideoActionButtons,
  LikeDisLikeOptions,
  LikeTitle,
  VideoContentContainer,
  ChannelLogo,
  VideoDescription,
  VideoText,
  ChannelName,
  VideoItemDescription,
  DisLikeButton,
  SaveButton,
  LoaderContainer,
} from './styledComponents'
import TrendingVideoItem from '../TrendingVideoItem'

const apiConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoItemDetail: {},
    channelData: {},
    apiStatus: apiConstants.initial,
    isSaveActive: false,
    isLikeActive: false,
    isDislikeActive: false,
  }

  componentDidMount() {
    this.getVideoItemDetail()
  }

  onClickRetry = () => {
    this.getVideoItemDetail()
  }

  onClickSave = () => {
    this.setState(prevState => ({isSaveActive: !prevState.isSaveActive}))
  }

  onClickLike = () => {
    this.setState(prevState => ({
      isLikeActive: !prevState.isLikeActive,
      isDislikeActive: false,
    }))
  }

  onClickDisLike = () => {
    this.setState(prevState => ({
      isDislikeActive: !prevState.isDislikeActive,
      isLikeActive: false,
    }))
  }

  onClickAddToSaved = () => {
    const {videoItemDetail} = this.state
    const {onClickSaveVideo} = this.props
    onClickSaveVideo(videoItemDetail)
    this.onClickSave()
  }

  getFormattedData = data => ({
    channel: {
      name: data.channel.name,
      profileImageUrl: data.channel.profile_image_url,
      subscriberCount: data.channel.subscriber_count,
    },
    id: data.id,
    publishedAt: data.published_at,
    thumbnailUrl: data.thumbnail_url,
    title: data.title,
    viewCount: data.view_count,
    videoUrl: data.video_url,
    description: data.description,
  })

  getVideoItemDetail = async () => {
    this.setState({apiStatus: apiConstants.loading})
    const {isLikeActive, isDislikeActive} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    console.log(response)
    if (response.ok === true) {
      const data = await response.json()
      console.log('videoData', data.video_details)

      const updatedData = this.getFormattedData(data.video_details)
      const {channel} = updatedData
      console.log('videoDetail', updatedData)
      this.setState({
        videoItemDetail: updatedData,
        channelData: channel,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {
      videoItemDetail,
      channelData,
      isSaveActive,
      isLikeActive,
      isDislikeActive,
    } = this.state
    const {isDarkTheme, onClickToggleTheme} = this.props
    const {
      channel,
      id,
      publishedAt,
      thumbnailUrl,
      title,
      description,
      viewCount,
      videoUrl,
    } = videoItemDetail

    console.log(videoItemDetail)
    const {name, profileImageUrl, subscriberCount} = channelData
    const convertedDate = formatDistanceToNow(new Date(publishedAt))
    const timeList = convertedDate.split(' ')
    const timeInYears = `${timeList[1]} ${timeList[2]} ago`
    return (
      <TrendingContainer>
        <Header
          onClickToggleTheme={onClickToggleTheme}
          isDarkTheme={isDarkTheme}
        />
        <TrendingContentWrapper>
          <Banner isDarkTheme={isDarkTheme} />
          <VideoItemContainer
            isDarkTheme={isDarkTheme}
            data-testid="videoItemDetails"
          >
            <ReactPlayer url={videoUrl} width="100%" height="500px" />
            <VideoItemDetailTitle isDarkTheme={isDarkTheme}>
              {title}
            </VideoItemDetailTitle>
            <VideoActionButtons>
              <TimeAndViewCount>
                <TrendingChannelName>{viewCount} views</TrendingChannelName>
                <TrendingChannelName>{timeInYears}</TrendingChannelName>
              </TimeAndViewCount>
              <TimeAndViewCount as="ul">
                <LikeDisLikeOptions
                  as="button"
                  type="button"
                  isLikeActive={isLikeActive}
                  onClick={this.onClickLike}
                >
                  <AiOutlineLike />
                  <LikeTitle>Like</LikeTitle>
                </LikeDisLikeOptions>
                <DisLikeButton
                  as="button"
                  type="button"
                  isDislikeActive={isDislikeActive}
                  onClick={this.onClickDisLike}
                >
                  <AiOutlineDislike />
                  <LikeTitle>Dislike</LikeTitle>
                </DisLikeButton>
                <SaveButton
                  as="button"
                  type="button"
                  isSaveActive={isSaveActive}
                  onClick={this.onClickAddToSaved}
                >
                  <BiListPlus />
                  <LikeTitle>{isSaveActive ? 'Saved' : 'Save'}</LikeTitle>
                </SaveButton>
              </TimeAndViewCount>
            </VideoActionButtons>
            <hr />
            <VideoContentContainer>
              <ChannelLogo src={profileImageUrl} alt="channel logo" />
              <VideoDescription>
                <VideoText isDarkTheme={isDarkTheme}>{name}</VideoText>
                <ChannelName>{subscriberCount} subscribers</ChannelName>
                <VideoItemDescription isDarkTheme={isDarkTheme}>
                  {description}
                </VideoItemDescription>
              </VideoDescription>
            </VideoContentContainer>
          </VideoItemContainer>
        </TrendingContentWrapper>
      </TrendingContainer>
    )
  }

  renderLoadingView = () => {
    const {isDarkTheme, onClickToggleTheme} = this.props
    return (
      <TrendingContainer>
        <Header
          onClickToggleTheme={onClickToggleTheme}
          isDarkTheme={isDarkTheme}
        />
        <TrendingContentWrapper>
          <Banner isDarkTheme={isDarkTheme} />
          <VideoItemContainer
            isDarkTheme={isDarkTheme}
            data-testid="videoItemDetails"
          >
            <LoaderContainer>
              <div className="loader-container" data-testid="loader">
                <Loader
                  type="ThreeDots"
                  color="#ffffff"
                  height="50"
                  width="50"
                />
              </div>
            </LoaderContainer>
          </VideoItemContainer>
        </TrendingContentWrapper>
      </TrendingContainer>
    )
  }

  renderFailureView = () => {
    const {isDarkTheme, onClickToggleTheme} = this.props
    return (
      <TrendingContainer>
        <Header
          onClickToggleTheme={onClickToggleTheme}
          isDarkTheme={isDarkTheme}
        />
        <TrendingContentWrapper>
          <Banner isDarkTheme={isDarkTheme} />
          <VideoItemContainer
            isDarkTheme={isDarkTheme}
            data-testid="videoItemDetails"
          >
            <FailureEmptyView
              isDarkTheme={isDarkTheme}
              onClickRetry={this.onClickRetry}
            />
          </VideoItemContainer>
        </TrendingContentWrapper>
      </TrendingContainer>
    )
  }

  render() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiConstants.success:
        return this.renderSuccessView()

      case apiConstants.loading:
        return this.renderLoadingView()

      case apiConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }
}

export default VideoItemDetails
