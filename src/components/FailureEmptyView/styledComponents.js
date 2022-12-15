import styled from 'styled-components'

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
