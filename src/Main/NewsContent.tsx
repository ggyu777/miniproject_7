import React, {useEffect, useState} from 'react'
import axios from 'axios';
import NewsList from './NewsList';
import { useSelector } from "react-redux";

function NewsContent() {
    let [fetchNewsList, setfetchNewsList] = useState([]);
    const newslistSetup = useSelector((state:any) => state.userClipSlice.content)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const [data, setData] = useState(null);
    const [category, setCategory] = useState("전체");
  
    useEffect(() => {
      const fetchUsers = async () => {
        try {
          // 요청이 시작 할 때에는 error 와 users 를 초기화하고
          setError(null);
          setData(null);
          // loading 상태를 true 로 바꿉니다.
          setLoading(true);
          const res = await axios.get(
            `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=EWwGLC2MiDPOYJ3pitIA23xZgYuFRtI0&page=0&q=education&sort=newest`
          );
          setfetchNewsList(res.data.response.docs);
        } catch (e:any) {
          setError(e);
        }
        setLoading(false);
      };
  
      fetchUsers();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    if (!fetchNewsList) return null;

    let checkArr:Array<string> = []
    newslistSetup.map((obj:any)=>{
      let title = obj.title
      checkArr.push(title)
    })
    return (
        <>
            {fetchNewsList.map((nl:any, index:number) => (
              <NewsList newscontent={nl} id={index} key={index} bool={checkArr.includes(nl.headline.main)}/>
            ))}
        </>
    )
}

export default NewsContent
