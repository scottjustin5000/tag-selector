import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 8px;
`

const TagsContainer = styled.div`
  margin: 8px;
  min-height: 24px;
  display: flex;
  overflow-x: scroll;
  padding-bottom: 2px;
`

const Input = styled.input`
 type: text;
 width: 100%;
 padding-left: 16px;
 padding: 0.4rem;
 margin-bottom: 8px;
 border:none;
 outline: none;
 background: none;
 border-bottom-color: #000;
 border-bottom-style: solid;
 border-bottom-width: 1px;
 :focus::-webkit-input-placeholder {
  transition: text-indent 0.2s 0.2s ease; 
  text-indent: -100%;
  opacity: 1;
}
`
const SmallTitle = styled.div`
  display:flex;
  font-weight; 600;
  font-size: 8px;
  visibility: ${props=> props.visibilty}
`

const Item = styled.div`
  height: 24px;
  font-size:12px;
  display: flex;
  align-items: center;
  border: solid 1px rgb(225, 231, 240);
  font-weight: 600;
  padding-left: 4px;
  margin-left: 4px;
  margin-right: 4px;
  border-radius:4px;
  background-color: #EDF0F5;
  box-shadow: 0 1px 1px #ccc;
`

const Close = styled.span`
  color: #000;
  font-size:10px;
  display: inline-block;
  &:after {
    margin-left: 4px;
    margin-right: 4px;
    content: 'x'; 
    cursor: pointer;
    font-weight: 400;
    font-family: Arial, sans-serif;
  }
`


export {
  Wrapper,
  TagsContainer,
  Input,
  SmallTitle,
  Item,
  Close
}