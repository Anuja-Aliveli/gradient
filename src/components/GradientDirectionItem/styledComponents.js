// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  @media (max-width: 576px) {
    margin-bottom: 10px;
    margin-right: 10px;
  }
`
export const DirectionButton = styled.button`
  height: 30px;
  width: 100px;
  background-color: #ffffff;
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  border: none;
  cursor: pointer;
  border-radius: 5px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
  align-self: center;
`
