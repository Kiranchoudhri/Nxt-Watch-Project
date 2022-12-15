import styled from 'styled-components'

export const TrendingContainer = styled.div`
  width: 100%;
`

export const TrendingContentWrapper = styled.div`
  display: flex;
`

export const TrendingModalWrapper = styled.div`
  width: 75%;
  height: 100vh;
  overflow-y: scroll;
`

export const TrendingPoster = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#313131' : '#f4f4f4')};
  display: flex;
  align-items: center;
  padding: 30px 60px;
`
export const TrendingLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#e2e8f0')};
  width: 80px;
  height: 80px;
  border-radius: 50%;
  font-size: 40px;
  color: #ff0000;
  margin-right: 20px;
`
export const TrendingHeading = styled.h1`
  font-size: 30px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
`
export const TrendingVideosSection = styled.ul`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  padding: 20px;
  padding: 30px 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  height: 100%;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
`
