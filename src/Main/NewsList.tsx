import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { clipNews, unclipNews } from "../reducer/userClipSlice"

interface newsInfo {
    id: string,
    name: string,
    title: string,
    date: string,
    content: string,
    clip: boolean,
    url: string
}

function NewsList(props:any) {
    let newsInfo:newsInfo = {
        id: props.newscontent._id,
        name: props.newscontent.byline.original,
        title: props.newscontent.headline.main,
        date: props.newscontent.pub_date,
        content: props.newscontent.lead_paragraph,
        clip: props.clip,
        url: props.newscontent.web_url
    }

    const dispatch = useDispatch();
    function clipClick(){
        if(newsInfo.clip === true){
            dispatch(unclipNews(newsInfo))
        }
        else{
            dispatch(clipNews(newsInfo))
        }
    }   

    return (
        <>
            <article style={{marginBottom:"40px"}}>
                <div className='newsTitle'>
                    <h3>
                        {newsInfo.title}
                    </h3>
                </div>
                <div className='writeDate'>
                    {newsInfo.date}
                </div>
                <div className="newsContents">
                    {newsInfo.content}
                </div>
                <button type='button' onClick={clipClick}>
                    {newsInfo.clip === true ? "UnClip" : "Clip"}
                </button>
                <button type='button'>
                    <a href={newsInfo.url} target="_blank" rel="noreferrer" >
                        See Detail
                    </a>
                </button>
            </article>
        </>
    )
}



export default NewsList