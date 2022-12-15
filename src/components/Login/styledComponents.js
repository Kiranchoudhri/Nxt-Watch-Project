import styled from 'styled-components'

export const LoginPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: '#f9f9f9';
`
export const FormCard = styled.div`
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: '#ffffff';
  border-radius: 10px;
  box-shadow: 2px 1px 1px 2px;
`
export const WebsiteLogo = styled.img`
  width: 150px;
  margin-bottom: 40px;
`
export const UsernameWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`
export const LabelElement = styled.label`
  margin-bottom: 6px;
  color: #64748b;
  font-weight: 700;
`
export const InputElement = styled.input`
  width: 300px;
  padding: 8px 16px;
  border: 2px solid #e2e8f0;
  font-size: 14px;
`
export const CheckboxElement = styled.div`
  margin-bottom: 20px;
`
export const InputCheckbox = styled.input`
  padding: 6px;
  width: 20px;
`
export const ShowPasswordLabel = styled.label`
  color: #000000;
  margin-left: 4px;
`
export const SubmitButton = styled.button`
  width: 100%;
  padding: 10px 16px;
  background-color: #4f46e5;
  color: #ffffff;
  border-radius: 8px;
  border-width: 0px;
`
export const ErrorMessage = styled.p`
  color: #ff0000;
  margin-bottom: 2px;
`
