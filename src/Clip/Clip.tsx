import React from 'react'
import { useSelector } from 'react-redux'

function Clip() {

  const b = useSelector((state:any) => state)

  console.log(b)
  return (
    <div>Clip</div>
  )
}

export default Clip