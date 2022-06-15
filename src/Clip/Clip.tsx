import React from 'react'
import { useSelector } from 'react-redux'

function Clip() {

  const b = useSelector((state:any) => state)

  b.userClipSlice.content.map((el:any)=>{
    console.log(el)
  })
  return (
    <div>Clip</div>
  )
}

export default Clip