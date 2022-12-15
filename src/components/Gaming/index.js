import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
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
} from '../Trending/styledComponents'

import GamingVideoItem from '../GamingVideoItem'

const apiConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {gamingVideos: [], apiStatus: apiConstants.initial}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiConstants.loading})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
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
        id: eachVideo.id,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      console.log('gaming', updatedData)
      this.setState({
        gamingVideos: updatedData,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  onClickRetry = () => {
    this.getGamingVideos()
  }

  renderSuccessView = () => {
    const {gamingVideos} = this.state
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
                <SiYoutubegaming />
              </TrendingLogoContainer>
              <TrendingHeading isDarkTheme={isDarkTheme}>
                Gaming
              </TrendingHeading>
            </TrendingPoster>
            <TrendingVideosSection
              isDarkTheme={isDarkTheme}
              data-testid="gaming"
            >
              {gamingVideos.map(eachVideo => (
                <GamingVideoItem
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
                <SiYoutubegaming />
              </TrendingLogoContainer>
              <TrendingHeading isDarkTheme={isDarkTheme}>
                Gaming
              </TrendingHeading>
            </TrendingPoster>
            <TrendingVideosSection
              isDarkTheme={isDarkTheme}
              data-testid="gaming"
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
                <SiYoutubegaming />
              </TrendingLogoContainer>
              <TrendingHeading isDarkTheme={isDarkTheme}>
                Gaming
              </TrendingHeading>
            </TrendingPoster>
            <TrendingVideosSection
              isDarkTheme={isDarkTheme}
              data-testid="gaming"
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

export default Gaming
