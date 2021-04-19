import React from 'react'
import {
  Item,
  Close
} from './styles'


const Tag = (props) => {
  return (<Item>{props.text}<Close onClick={() => { props.onRemove(props.index) }} /> </Item>)
}

export default Tag