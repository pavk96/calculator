import React, { useState, useEffect } from 'react'

const SearchBar = () => {
  const [text, setText] = useState('')
  const onChange = (e) => {
    setText(e.target.value)
    console.log(e.target.value)
  }
  useEffect(() => {
    console.log('hi')
  }, [])
  return (
    <div className="ui input">
      <input
        type="text"
        placeholder="Search..."
        id=""
        value={text}
        onChange={onChange}
      />
    </div>
  )
}

export default SearchBar
