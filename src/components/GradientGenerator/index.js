import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  BackContainer,
  Heading,
  DisplayText,
  ColorTextContainer,
  ColorsContainer,
  InputElement,
  DisplayColor,
  FormContainer,
  GenerateButton,
  DirectionList,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    direction: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  onChangeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  onGenerate = () => {
    const {direction, color1, color2} = this.state
    this.setState({gradientValue: `to ${direction}, ${color1}, ${color2}`})
  }

  onDirection = directionValue => {
    this.setState({direction: directionValue})
  }

  render() {
    const {gradientValue, color1, color2, direction} = this.state
    return (
      <BackContainer
        gradientValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <DisplayText>Choose Direction</DisplayText>
        <DirectionList>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              key={eachItem.directionId}
              directionDetails={eachItem}
              isActive={eachItem.value === direction}
              onDirection={this.onDirection}
            />
          ))}
        </DirectionList>
        <DisplayText>Pick the Colors</DisplayText>
        <FormContainer>
          <ColorsContainer>
            <ColorTextContainer>
              <DisplayColor>{color1}</DisplayColor>
              <InputElement
                type="color"
                value={color1}
                onChange={this.onChangeColor1}
              />
            </ColorTextContainer>
            <ColorTextContainer>
              <DisplayColor>{color2}</DisplayColor>
              <InputElement
                type="color"
                value={color2}
                onChange={this.onChangeColor2}
              />
            </ColorTextContainer>
          </ColorsContainer>
          <GenerateButton type="button" onClick={this.onGenerate}>
            Generate
          </GenerateButton>
        </FormContainer>
      </BackContainer>
    )
  }
}
export default GradientGenerator
