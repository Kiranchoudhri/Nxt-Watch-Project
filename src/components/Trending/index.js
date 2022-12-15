import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Banner from '../Banner'
import FailureEmptyView from '../FailureEmptyView'
import {
  TrendingContainer,
  TrendingContentWrapper,
  TrendingModalWrapper,
  TrendingVideosSection,
  TrendingPoster,
  TrendingLogoContainer,
  TrendingHeading,
  LoaderContainer,
} from './styledComponents'
import TrendingVideoItem from '../TrendingVideoItem'

const apiConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Tending extends Component {
  state = {trendingVideos: [], apiStatus: apiConstants.initial}

  componentDidMount() {
    this.getTrendingVideos()
  }

  onClickRetry = () => {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiConstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
      console.log(data)
      const updatedData = data.videos.map(eachVideo => ({
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      console.log('trending', updatedData)
      this.setState({
        trendingVideos: updatedData,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {trendingVideos} = this.state
    const {isDarkTheme, onClickToggleTheme} = this.props
    return (
      <TrendingContainer>
        <Header
          onClickToggleTheme={onClickToggleTheme}
          isDarkTheme={isDarkTheme}
        />
        <TrendingContentWrapper>
          <Banner isDarkTheme={isDarkTheme} />
          <TrendingModalWrapper>
            <TrendingPoster isDarkTheme={isDarkTheme}>
              <TrendingLogoContainer isDarkTheme={isDarkTheme}>
                <HiFire />
              </TrendingLogoContainer>
              <TrendingHeading isDarkTheme={isDarkTheme}>
                Trending
              </TrendingHeading>
            </TrendingPoster>
            <TrendingVideosSection
              isDarkTheme={isDarkTheme}
              data-testid="trending"
            >
              {trendingVideos.map(eachVideo => (
                <TrendingVideoItem
                  key={eachVideo.id}
                  eachVideoDetail={eachVideo}
                  isDarkTheme={isDarkTheme}
                />
              ))}
            </TrendingVideosSection>
          </TrendingModalWrapper>
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
          <TrendingModalWrapper>
            <TrendingPoster isDarkTheme={isDarkTheme}>
              <TrendingLogoContainer isDarkTheme={isDarkTheme}>
                <HiFire />
              </TrendingLogoContainer>
              <TrendingHeading isDarkTheme={isDarkTheme}>
                Trending
              </TrendingHeading>
            </TrendingPoster>
            <TrendingVideosSection
              isDarkTheme={isDarkTheme}
              data-testid="trending"
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
            </TrendingVideosSection>
          </TrendingModalWrapper>
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
          <TrendingModalWrapper>
            <TrendingPoster isDarkTheme={isDarkTheme}>
              <TrendingLogoContainer isDarkTheme={isDarkTheme}>
                <HiFire />
              </TrendingLogoContainer>
              <TrendingHeading isDarkTheme={isDarkTheme}>
                Trending
              </TrendingHeading>
            </TrendingPoster>
            <TrendingVideosSection
              isDarkTheme={isDarkTheme}
              data-testid="trending"
            >
              <FailureEmptyView
                isDarkTheme={isDarkTheme}
                onClickRetry={this.onClickRetry}
              />
            </TrendingVideosSection>
          </TrendingModalWrapper>
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

export default Tending
