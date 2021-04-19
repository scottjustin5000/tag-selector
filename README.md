# tag-selector

> react tag selector

[![NPM](https://img.shields.io/npm/v/tag-selector.svg)](https://www.npmjs.com/package/tag-selector) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save tag-selector
```

## Usage

```jsx
import React from 'react'
import TagSelector from './tag-selector'
export const Example = () => {

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
```

## License

MIT © [scottjustin5000](https://github.com/scottjustin5000)
