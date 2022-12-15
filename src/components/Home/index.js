import {Component} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Banner from '../Banner'
import HomeModal from '../HomeModal'
import FailureEmptyView from '../FailureEmptyView'
import {
  HomeContentWrapper,
  HomeVideosSection,
  SearchContainer,
  SearchElement,
  SearchButton,
  ListOfVideos,
  HomeContainer,
  HomeModalWrapper,
  LoaderContainer,
  EmptySearchImage,
  EmptySearchView,
  EmptySearchHeading,
  EmptySearchDesc,
  RetryButton,
} from './styledComponents'
import HomeVideoItem from '../HomeVideoItem'

const apiConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    homeVideos: [],
    searchText: '',
    apiStatus: apiConstants.initial,
    isHomeModalActive: true,
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  onClickClose = () => {
    this.setState({isHomeModalActive: false})
  }

  onChangeSearch = e => {
    this.setState({searchText: e.target.value})
  }

  onClickApplySearch = () => {
    this.getHomeVideos()
  }

  onClickRetry = () => {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({apiStatus: apiConstants.loading})
    const {searchText} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchText}`
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
      console.log(updatedData)
      this.setState({homeVideos: updatedData, apiStatus: apiConstants.success})
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {homeVideos, searchText, isHomeModalActive} = this.state
    const {onClickToggleTheme, isDarkTheme} = this.props
    return (
      <HomeContainer>
        <Header
          onClickToggleTheme={onClickToggleTheme}
          isDarkTheme={isDarkTheme}
        />
        <HomeContentWrapper>
          <Banner isDarkTheme={isDarkTheme} />
          <HomeModalWrapper>
            {isHomeModalActive && (
              <HomeModal onClickClose={this.onClickClose} />
            )}
            <HomeVideosSection isDarkTheme={isDarkTheme} data-testid="home">
              <SearchContainer>
                <SearchElement
                  type="Search"
                  placeholder="Search"
                  onChange={this.onChangeSearch}
                  value={searchText}
                />
                <SearchButton
                  type="button"
                  onClick={this.onClickApplySearch}
                  data-testid="searchButton"
                >
                  <AiOutlineSearch />
                </SearchButton>
              </SearchContainer>
              <ListOfVideos>
                {homeVideos.length === 0 ? (
                  <EmptySearchView>
                    <EmptySearchImage
                      alt="no videos"
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                    />
                    <EmptySearchHeading isDarkTheme={isDarkTheme}>
                      No Search results found
                    </EmptySearchHeading>
                    <EmptySearchDesc>
                      Try different key words or remove search filter
                    </EmptySearchDesc>

                    <RetryButton type="button" onClick={this.onClickRetry}>
                      Retry
                    </RetryButton>
                  </EmptySearchView>
                ) : (
                  homeVideos.map(eachVideoDetail => (
                    <HomeVideoItem
                      key={eachVideoDetail.id}
                      eachVideoDetail={eachVideoDetail}
                      isDarkTheme={isDarkTheme}
                    />
                  ))
                )}
              </ListOfVideos>
            </HomeVideosSection>
          </HomeModalWrapper>
        </HomeContentWrapper>
      </HomeContainer>
    )
  }

  renderLoadingView = () => {
    const {homeVideos, searchText, isHomeModalActive} = this.state
    const {onClickToggleTheme, isDarkTheme} = this.props
    return (
      <HomeContainer>
        <Header
          onClickToggleTheme={onClickToggleTheme}
          isDarkTheme={isDarkTheme}
        />
        <HomeContentWrapper>
          <Banner isDarkTheme={isDarkTheme} />
          <HomeModalWrapper>
            {isHomeModalActive && (
              <HomeModal onClickClose={this.onClickClose} />
            )}
            <HomeVideosSection isDarkTheme={isDarkTheme} data-testid="home">
              <SearchContainer>
                <SearchElement
                  type="Search"
                  placeholder="Search"
                  onChange={this.onChangeSearch}
                  value={searchText}
                />
                <SearchButton
                  type="button"
                  onClick={this.onClickApplySearch}
                  data-testid="searchButton"
                >
                  <AiOutlineSearch />
                </SearchButton>
              </SearchContainer>
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
            </HomeVideosSection>
          </HomeModalWrapper>
        </HomeContentWrapper>
      </HomeContainer>
    )
  }

  renderFailureView = () => {
    const {homeVideos, searchText, isHomeModalActive} = this.state
    const {onClickToggleTheme, isDarkTheme} = this.props
    const failureImageLight =
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    const failureImageDark =
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
    return (
      <HomeContainer>
        <Header
          onClickToggleTheme={onClickToggleTheme}
          isDarkTheme={isDarkTheme}
        />
        <HomeContentWrapper>
          <Banner isDarkTheme={isDarkTheme} />
          <HomeModalWrapper>
            {isHomeModalActive && (
              <HomeModal onClickClose={this.onClickClose} />
            )}
            <HomeVideosSection isDarkTheme={isDarkTheme} data-testid="home">
              <SearchContainer>
                <SearchElement
                  type="search"
                  placeholder="Search"
                  onChange={this.onChangeSearch}
                  value={searchText}
                />
                <SearchButton
                  type="button"
                  onClick={this.onClickApplySearch}
                  data-testid="searchButton"
                >
                  <AiOutlineSearch />
                </SearchButton>
              </SearchContainer>
              <FailureEmptyView
                isDarkTheme={isDarkTheme}
                onClickRetry={this.onClickRetry}
              />
            </HomeVideosSection>
          </HomeModalWrapper>
        </HomeContentWrapper>
      </HomeContainer>
    )
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
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

export default Home
