import {
  EmptySearchImage,
  EmptySearchView,
  EmptySearchHeading,
  EmptySearchDesc,
  RetryButton,
} from './styledComponents'

const FailureEmptyView = props => {
  const {isDarkTheme, onClickRetry} = props
  const failureImageLight =
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
  const failureImageDark =
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

  const retryRequest = () => {
    onClickRetry()
  }

  return (
    <EmptySearchView>
      <EmptySearchImage
        alt="failure view"
        src={isDarkTheme ? failureImageDark : failureImageLight}
      />
      <EmptySearchHeading isDarkTheme={isDarkTheme}>
        Oops! Something Went Wrong
      </EmptySearchHeading>
      <EmptySearchDesc>
        We are having some trouble to complete your request. Please try again.
      </EmptySearchDesc>

      <RetryButton type="button" onClick={retryRequest}>
        Retry
      </RetryButton>
    </EmptySearchView>
  )
}

export default FailureEmptyView
