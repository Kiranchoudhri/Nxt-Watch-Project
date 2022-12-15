import {Component} from 'react'
import {Link} from 'react-router-dom'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'
import Header from '../Header'
import Banner from '../Banner'
import {
  TrendingContainer,
  TrendingContentWrapper,
  TrendingModalWrapper,
  TrendingVideosSection,
  TrendingPoster,
  TrendingLogoContainer,
  TrendingHeading,
} from '../Trending/styledComponents'

import {
  EmptySearchImage,
  EmptySearchView,
  EmptySearchHeading,
  EmptySearchDesc,
} from '../Home/styledComponents'
import TrendingVideoItem from '../TrendingVideoItem'

const apiConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class SavedVideos extends Component {
  render() {
    const {savedVideosList, isDarkTheme, onClickToggleTheme} = this.props
    const filteredVideosList = savedVideosList.filter(
      eachVideo => eachVideo.isActive === true,
    )

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
                Saved Videos
              </TrendingHeading>
            </TrendingPoster>
            <TrendingVideosSection
              isDarkTheme={isDarkTheme}
              data-testid="savedVideos"
            >
              {filteredVideosList.length === 0 ? (
                <EmptySearchView>
                  <EmptySearchImage
                    alt="no saved videos"
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  />
                  <EmptySearchHeading isDarkTheme={isDarkTheme}>
                    No saved videos found
                  </EmptySearchHeading>
                  <EmptySearchDesc>
                    You can save your videos while watching them
                  </EmptySearchDesc>
                </EmptySearchView>
              ) : (
                filteredVideosList.map(eachVideo => (
                  <TrendingVideoItem
                    key={eachVideo.id}
                    eachVideoDetail={eachVideo}
                    isDarkTheme={isDarkTheme}
                  />
                ))
              )}
            </TrendingVideosSection>
          </TrendingModalWrapper>
        </TrendingContentWrapper>
      </TrendingContainer>
    )
  }
}

export default SavedVideos
