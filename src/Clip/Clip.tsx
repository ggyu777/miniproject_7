import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clipNews, unclipNews } from "../reducer/userClipSlice"
import {useNavigate} from 'react-router-dom';

function Clip() {
  // let content:any = useSelector((state:any)=>{state.content})
  let dispatch = useDispatch()
  
  const navigate = useNavigate();

  const clippedNews = useSelector((state:any) => state.userClipSlice.content)

  console.log(clippedNews)
  
  return (
    <>
      <button className='mainLink' onClick={()=>{navigate('/')}} >메인으로</button>
        clippedNews.map((i:any,key:any)=>{
                if(key>0){
            return(
              <article style={{marginBottom:"40px"}}>
              <div className='newsTitle'>
                  <h3>
                      {i.title}
                  </h3>
              </div>
              <div className='writeDate'>
                  {i.date}
              </div>
              <div className="newsContents">
                  {i.content}
              </div>
              {
              i.clip==false
              ? <button type='button' onClick={()=>{dispatch(unclipNews(i.id))}}>Clip</button> 
              : <button type='button' onClick={()=>{dispatch(unclipNews(i.id))}}>Unclip</button>
              }
              <button type='button'>
                  <a href={i.newsurl} target="_blank" rel="noreferrer" >
                      See Detail
                  </a>
              </button>
            </article>
            )
           }
          }
     </>
    )



export default Clip

