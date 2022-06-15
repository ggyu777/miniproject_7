import React, {useEffect, useState} from 'react'
import axios from 'axios';
import NewsList from './NewsList';

function NewsContent(props:any) {
    let [fetchNewsList, setfetchNewsList] = useState([]);

    useEffect(() => {
      // console.log("News:" + props.inputValue);
      if (props.inputValue) {
        axios
        // &q= keyword
        .get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${props.inputValue}&api-key=EWwGLC2MiDPOYJ3pitIA23xZgYuFRtI0&page=0&q=education&sort=newest`)
        .then((res)=>{
          setfetchNewsList(res.data.response.docs)
        })
        .catch((err)=>{
          console.log(err)
        })
      }
    }, [props.inputValue])

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