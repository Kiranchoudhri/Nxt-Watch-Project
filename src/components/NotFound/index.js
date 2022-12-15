import {
  TrendingContainer,
  TrendingContentWrapper,
  VideoItemContainer,
  NotFoundImage,
  NotFoundTitle,
  NotFoundDescription,
} from './styledComponents'
import Header from '../Header'
import Banner from '../Banner'

const NotFound = () => (
  <TrendingContainer>
    <Header />
    <TrendingContentWrapper>
      <Banner />
      <VideoItemContainer>
        <NotFoundImage
          alt="not found"
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
        />
        <NotFoundTitle>Page Not Found</NotFoundTitle>
        <NotFoundDescription>
          we are sorry, the page you requested could not be found
        </NotFoundDescription>
      </VideoItemContainer>
    </TrendingContentWrapper>
  </TrendingContainer>
)

export default NotFound
