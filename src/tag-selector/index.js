import React, { useState } from 'react'
import {
  Wrapper,
  TagsContainer,
  Input,
  SmallTitle
} from './styles'

import Tag from './tag'



const TagSelector = (props) => {
  const [inputFocused, setInputFocused] = useState(false)
  const [value, setValue] = useState('')
  const [tags, setTags] = useState([])

  const handleChange = (e) => {
    const value = e.target.value
    setValue(value)
  }

  const handleKeyUp = (e) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      const updated = [...tags, ...[{ label: value, value: value }]]
      setTags(updated)
      setValue('')
      props.onTagsUpdated(updated)
    }
  }

  const handleRemoveTag = (i) => {
    const updated = tags.filter((f, idx) => {
      if(i !== idx) return f
    })
    setTags(updated)
    props.onTagsUpdated(updated)
  }

  const handleFocus =() => {
    setInputFocused(true)
  }

  const handleBlur = () => {
    setInputFocused(false)
  }


   return(
     <Wrapper>
     <SmallTitle visibilty={(tags.length > 0  || inputFocused) ? 'visible' : 'hidden'}>{props.title}</SmallTitle> 
     <Input onFocus={handleFocus} onBlur={handleBlur} placeholder={props.placeholder} onChange={handleChange} onKeyUp={handleKeyUp} value={value} />
       <TagsContainer>
        {tags.map((t,i) => <Tag key={`tag_${i}`} index={i} text={t.label} onRemove={handleRemoveTag} />)}
       </TagsContainer>
   </Wrapper>
   )
}

export default TagSelector