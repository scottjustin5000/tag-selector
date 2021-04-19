import React from 'react'

import { TagSelector } from 'tag-selector'

const App = () => {
 
  const handleTagsUpdated = (tags) => {
    console.log('TAGS', tags)
  }

  return <div style={{display: 'flex', justifyContent: 'center', padding:'20px'}}>
  <div style={{width: '250px'}}>
    <TagSelector 
    title='something'
    placeholder='another'
    onTagsUpdated={handleTagsUpdated}
    />
    </div>
  </div>
}

export default App
