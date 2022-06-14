import React, {useEffect, useState} from 'react'
import axios from 'axios';
import NewsList from './NewsList';

function NewsContent() {
    let [fetchNewsList, setfetchNewsList] = useState([]);

    useEffect(()=>{
        axios
            // &q= keyword
            .get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=EWwGLC2MiDPOYJ3pitIA23xZgYuFRtI0&page=0&q=education&sort=newest`)
            .then((res)=>{
                setfetchNewsList(res.data.response.docs)
            })
            .catch((err)=>{
                console.log(err)
            })
    },[])


    return (
        <>
            {Object.values(fetchNewsList).map((nl:object, index:number) => {
                return(
                    <NewsList newscontent={nl} key={index}/>
                )
            })}
        </>
    )
}

export default NewsContent
