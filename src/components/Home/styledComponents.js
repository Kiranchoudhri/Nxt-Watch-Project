import styled from 'styled-components'

export const HomeContentWrapper = styled.div`
  display: flex;
`
export const HomeContainer = styled.div`
  width: 100%;
`

export const HomeModalWrapper = styled.div`
  width: 100%;
`
export const HomeVideosSection = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  padding: 20px;
  color: ${props => props.isDarkTheme && '#ffffff'};
`

export const SearchContainer = styled.div`
  display: flex;
  margin-bottom: 30px;
`
export const SearchElement = styled.input`
  width: 500px;
  height: 40px;
  border: 1px solid #64748b;
  padding: 8px;
`
export const SearchButton = styled.button`
  border: 1px solid #64748b;
  width: 60px;
  align-self: stretch;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`
export const ListOfVideos = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
`

export const EmptySearchView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 500px;
`

export const EmptySearchHeading = styled.h1`
  font-size: 26px;
  margin-bottom: 20px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#0f0f0f')};
`
export const EmptySearchDesc = styled.p`
  font-size: 20px;
  color: #475569;
  margin-bottom: 20px;
`
export const RetryButton = styled.button`
  padding: 10px 30px;
  background-color: #4f46e5;
  color: #ffffff;
  border-radius: 4px;
  border-width: 0px;
`

export const EmptySearchImage = styled.img`
  width: 40%;
  margin-bottom: 30px;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
`
