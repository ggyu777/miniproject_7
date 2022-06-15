import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { clipNews } from "../reducer/userClipSlice"

function NewsList(props:any) {

    // console.log(props.newscontent)
    // console.log(props.newscontent._id)

    let newsInfo = {
        name: props.newscontent.byline.original,
        id: "Jason",
        title: props.newscontent.headline.main,
        date:props.newscontent.pub_date,
        content:props.newscontent.lead_paragraph,
        clip:false,
    }
    const dispatch = useDispatch();
    function clipClick(e:any){
        dispatch(clipNews(newsInfo))
    }

    const clipCheck = useSelector((state:any) => state)

    // console.log(clipCheck)

    return (
      <>
        <article style={{marginBottom:"40px"}}>
          <div className='newsTitle'>
              <h3>
                  {props.newscontent.headline.main}
              </h3>
          </div>
          <div className='writeDate'>
              {props.newscontent.pub_date}
          </div>
          <div className="newsContents">
              {props.newscontent.lead_paragraph}
          </div>
          <button type='button' onClick={clipClick}>
              Clip
          </button>
          <button type='button'>
              <a href={props.newscontent.web_url} target="_blank" rel="noreferrer" >
                  See Detail
              </a>
          </button>
        </article>
      </>
    )
}


export default NewsList