import React, {useEffect, useState} from 'react'
import axios from 'axios';
import NewsList from './NewsList';
import { useSelector } from 'react-redux';

const html:any = document.querySelector("html");

let viewPage = 0;

// const observer = new IntersectionObserver(ent => {
//     ent.forEach(entry => {
//         if(entry.intersectionRatio > 0){
//             entry.target.classList.add("tada")
//             // const a = moreFetch()
//             console.log("hi")
//         }
//         else{
//             entry.target.classList.remove("tada")
//             console.log("hi2")
//         }
//     })
// });

// const boxElList = document.querySelectorAll("article");
// boxElList.forEach((el)=>{
//     observer.observe(el)
// })

// let option = {
//     root: document.querySelector("html"),
//     rootMargin: '100px',
//     threshold: 1.0
// }
// let observer = new IntersectionObserver(()=>{

// },option)



function NewsContent(props:any) {
    const [fetchNewsList, setFetchNewsList] = useState([]);
    const concatArr:any = []

    const moreFetch = async () => {
        viewPage += 1;

        await axios
        .get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=EWwGLC2MiDPOYJ3pitIA23xZgYuFRtI0&page=${viewPage}&q=${props.inputValue}&sort=newest`)
        .then((res)=>{
            console.log("1")
            console.log(fetchNewsList)
            setFetchNewsList(fetchNewsList.concat(res.data.response.docs))
            
        })
        .then(()=>{
            console.log("2")
            console.log(fetchNewsList)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const FetchFunc = () => {
        viewPage = 0;
        axios
            // &q= keyword
            .get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=EWwGLC2MiDPOYJ3pitIA23xZgYuFRtI0&page=${viewPage}&q=${props.inputValue}&sort=newest`)
            .then((res)=>{
                setFetchNewsList(concatArr.concat(res.data.response.docs))
            })
            .catch((err)=>{
                console.log(err)
            });
    } 
    
    useEffect(()=>{
            FetchFunc()

            const scrollHandle = () => {
                if(Math.floor(html.clientHeight + html.scrollTop) === html.scrollHeight){

                    // 1번 Case
                    moreFetch();

                    // 2번 Case
                    let btn:any = document.querySelector(".moreView");
                    btn.click(); // onClick = { moreFetch }
                }
            }
            window.addEventListener('scroll',scrollHandle)
            
            return window.removeEventListener('scroll',scrollHandle)
    },[])

    const clipCheck = useSelector((state:any) => state)
    const clipList:string[] = [];
    clipCheck.userClipSlice.content.map((clip_list:any):void => {
        clipList.push(clip_list.id);
    });
    

    return (
        <>
            <button className="moreView" type="button" onClick={moreFetch}>Button</button>
            {Object.values(fetchNewsList).map((nl:any, index:number) => {
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
