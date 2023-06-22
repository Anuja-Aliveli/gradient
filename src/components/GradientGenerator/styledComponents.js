// Style your elements here
import styled from 'styled-components'

export const BackContainer = styled.div`
  background-image: linear-gradient(${props => props.gradientValue});
  background-size: cover;
  font-family: 'Roboto';
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`
export const Heading = styled.h1`
  color: #ededed;
  font-size: 40px;
  margin-bottom: 0;
  @media (max-width: 576px) {
    font-size: 30px;
    text-align: center;
  }
`
export const DisplayText = styled.p`
  color: #ffffff79;
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 0;
  @media (max-width: 576px) {
    font-size: 20px;
  }
`
export const ColorsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`
export const ColorTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
`
export const DisplayColor = styled.p`
  color: #ededed;
  font-size: 20px;
`
export const InputElement = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const GenerateButton = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  height: 30px;
  width: 100px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  align-self: center;
  margin-top: 20px;
`
export const DirectionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
  padding: 0;
  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 425px;
    justify-content: space-between;
  }
`
