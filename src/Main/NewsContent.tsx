import React, {useEffect, useState} from 'react'
import axios from 'axios';
import NewsList from './NewsList';
import { useSelector } from 'react-redux';

const html:any = document.querySelector("html");

function NewsContent(props:any) {
    const [fetchNewsList, setFetchNewsList] = useState([]);
    const [more, setMore] = useState(false)
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false)
    const concatArr:any = []
    const  FetchFunc = () => {
        if(more === false){
            axios
                .get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=EWwGLC2MiDPOYJ3pitIA23xZgYuFRtI0&page=0&q=${props.inputValue}&sort=newest`)
                .then((res)=>{
                    setFetchNewsList(concatArr.concat(res.data.response.docs))
                })
                .then(()=>{
                    setIsLoading(false)
                    setMore(state => !state)
                })
                .catch((err)=>{
                    console.log(err)
                });
            
        }
        else{
            axios
                .get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=EWwGLC2MiDPOYJ3pitIA23xZgYuFRtI0&page=${page}&q=${props.inputValue}&sort=newest`)
                .then((res)=>{
                    setFetchNewsList(fetchNewsList.concat(res.data.response.docs))
                })
                .then(()=>{
                    setIsLoading(false)
                    // setMore(false)
                })
                .catch((err)=>{
                    console.log(err)
                })
                
        }
        
    } 
    const  scrollHandle = () => {
        if(isLoading === false){
            if(Math.round(html.clientHeight + html.scrollTop) === html.scrollHeight){
                setMore(true)
                setPage((prev)=>prev+1);
            }
        }
    }

    useEffect(()=>{
        if(props.inputValue){
        if(isLoading === false){
            setIsLoading(true)
            setPage(0)
            setMore(true)
            FetchFunc();
        }
    }
        window.addEventListener('scroll',scrollHandle)
        return ()=>{window.removeEventListener('scroll',scrollHandle)}
    
    },[props.inputValue])
    
    useEffect(() => {
        if(props.inputValue){
        if(isLoading === false){
            setIsLoading(true)
            setMore(false)
            FetchFunc();
        }
        }
        window.addEventListener('scroll',scrollHandle)
        
        return ()=>{window.removeEventListener('scroll',scrollHandle)}
    }, [page])

    const clipCheck = useSelector((state:any) => state)
    const clipList:string[] = [];

    clipCheck.userClipSlice.content.map((clip_list:any):void => {
        clipList.push(clip_list.id);
    });

    return (
        <>
            {fetchNewsList.map((nl:any, index:number) => {
                let storeClipCheck = false;
                if(clipList.includes(nl._id)){
                    storeClipCheck = true;
                }
                return(
                    <NewsList newscontent={nl} clip={storeClipCheck} key={index}/>
                )
            })}
        </>
    )
}

export default NewsContent
