import React  from 'react'
import SearchInput from './SearchInput';
import NewsContent from './NewsContent';
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();

  return (
    <>
      <button className='clipLink' onClick={()=>{navigate('/clip')}} >클립목록</button><br/>
      <SearchInput />
      <NewsContent />
    </>
  )
}

export default Main