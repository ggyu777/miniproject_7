import React, { useState } from 'react'
import SearchInput from './SearchInput';
import NewsContent from './NewsContent';

function Main() {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <SearchInput inputValue={inputValue} setInputValue={setInputValue} />
      <NewsContent inputValue={inputValue} />
    </>
  )
}

export default Main