import {GrFormClose} from 'react-icons/gr'

import {
  PremiumPlansBanner,
  PremiumPlansWrapper,
  LogoAndCloseButton,
  ModalMessage,
  ModalWebsiteLogo,
  GetNowButton,
  HomeModalCloseBtn,
} from './styledComponents'

const HomeModal = props => {
  const {onClickClose} = props
  const closeHomeModal = () => {
    onClickClose()
  }
  return (
    <PremiumPlansBanner data-testid="banner">
      <PremiumPlansWrapper>
        <LogoAndCloseButton>
          <ModalWebsiteLogo
            alt="nxt watch logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          />
          <HomeModalCloseBtn
            type="button"
            onClick={closeHomeModal}
            data-testid="close"
          >
            <GrFormClose />
          </HomeModalCloseBtn>
        </LogoAndCloseButton>
        <ModalMessage>
          Buy Nxt Watch Premium prepaid plans with UPI
        </ModalMessage>
        <GetNowButton>GET IT NOW</GetNowButton>
      </PremiumPlansWrapper>
    </PremiumPlansBanner>
  )
}

export default HomeModal
