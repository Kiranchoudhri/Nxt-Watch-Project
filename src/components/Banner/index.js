import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import {
  BannerContainer,
  BannerFeaturesList,
  BannerFeaturesItem,
  ItemText,
  ContactSection,
  ContactTitle,
  SocialMediaIcons,
  SocialMediaLogo,
  ContactText,
  BannerLinkElement,
} from './styledComponents'

const Banner = props => {
  const {isDarkTheme} = props
  return (
    <BannerContainer isDarkTheme={isDarkTheme}>
      <BannerFeaturesList>
        <BannerFeaturesItem>
          <BannerLinkElement to="/">
            <AiFillHome />
            <ItemText isDarkTheme={isDarkTheme}>Home</ItemText>
          </BannerLinkElement>
        </BannerFeaturesItem>
        <BannerFeaturesItem>
          <BannerLinkElement to="/trending">
            <HiFire />
            <ItemText isDarkTheme={isDarkTheme}>Trending</ItemText>
          </BannerLinkElement>
        </BannerFeaturesItem>
        <BannerFeaturesItem>
          <BannerLinkElement to="/gaming">
            <SiYoutubegaming />
            <ItemText isDarkTheme={isDarkTheme}>Gaming</ItemText>
          </BannerLinkElement>
        </BannerFeaturesItem>
        <BannerFeaturesItem>
          <BannerLinkElement to="/saved-videos">
            <BiListPlus />
            <ItemText isDarkTheme={isDarkTheme}>Saved videos</ItemText>
          </BannerLinkElement>
        </BannerFeaturesItem>
      </BannerFeaturesList>
      <ContactSection>
        <ContactTitle isDarkTheme={isDarkTheme}>CONTACT US</ContactTitle>
        <SocialMediaIcons>
          <SocialMediaLogo
            alt="facebook logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
          />
          <SocialMediaLogo
            alt="twitter logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
          />
          <SocialMediaLogo
            alt="linked in logo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
          />
        </SocialMediaIcons>
        <ContactText isDarkTheme={isDarkTheme}>
          Enjoy! Now to see your channels and recommendations!
        </ContactText>
      </ContactSection>
    </BannerContainer>
  )
}

export default Banner
