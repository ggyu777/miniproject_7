import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { clipNews,unclipNews } from "../reducer/userClipSlice"



function NewsList(props:any) {

    let newsInfo = {
        id: props.id,
        name: props.newscontent.byline.original,
        title: props.newscontent.headline.main,
        date:props.newscontent.pub_date,
        content:props.newscontent.lead_paragraph,
        newsurl:props.newscontent.web_url,
        clip:props.bool,
    }

    const dispatch = useDispatch();

    function clipClickButton(e:any){
        dispatch(clipNews(newsInfo))
    }

    function unclipClickButton(){
        dispatch(unclipNews(newsInfo))
    }


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
                {
                newsInfo.clip == false ? <button type='button' onClick={clipClickButton}>Clip</button> : <button type='button' onClick={unclipClickButton}>Unclip</button>
                }
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
