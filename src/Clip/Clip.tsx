import React from 'react'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom';

function Clip() {

  const b = useSelector((state:any) => state)

  b.userClipSlice.content.map((el:any)=>{
    console.log(el)
  })

  const navigate = useNavigate();

  console.log(b)
  return (
    <>
      <button className='mainLink' onClick={()=>{navigate('/')}} >메인으로</button>
      <div>Clip</div>
    </>
  )
}

export default Clip