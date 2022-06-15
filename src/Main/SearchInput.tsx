import React, { useState } from 'react'

export default function SearchInput(props:any) {
  const [timer, setTimer] = useState(0);
  const [focus, setFocus] = useState(false);

  const handleInputChange = (e:any) => {
    if (timer) {  //0.5초 미만으로 입력이 주어질 경우 해당 timer를 clear
      clearTimeout(timer);
    }
    const newTimer:any = setTimeout(() => {
      let searchWord:{ id: number, word: string } = 
      { 
        id: Date.now(),
        word: e.target.value
      }
      props.setInputValue(e.target.value);

      // input에 값이 있고 && localstorage에 저장된 검색어가 있을 때
      if (e.target.value && localStorage.getItem("searchWord")) {
        let output:string[] = JSON.parse(localStorage.getItem("searchWord") || "[]"); // 저장된 검색어 가져옴
        
        if (output.length >= 5) { // 검색어가 5개 이상이 됐을 때
          output.shift(); // shift로 제일 처음 검색어를 뺀다.
        }

        localStorage.setItem("searchWord", JSON.stringify([...output, searchWord])); // localstorage에 검색어 저장
      }
      else if (e.target.value) { // localstorage에 처음 저장할 때
        localStorage.setItem("searchWord", JSON.stringify([searchWord]));
      }
    }, 500); //입력 후 0.5초 이상 지나면 e.target.value를 담는 함수 실행
    setTimer(newTimer);
  } 
  
  return (
    <div>
      <input
        type="text" placeholder="type search keyword here" 
        onChange={handleInputChange}
        onFocus={()=>{setFocus(true)}} onBlur={()=>{setFocus(false)}}
        style={{width: "100%"}}
      />
      <br/>
      {(focus && localStorage.getItem("searchWord")) &&
        <ul style={{ listStyle: "none", padding: 0, margin: 0, border: "2px solid black" }}>
          <li>Recent Keywords...</li>
          {
            JSON.parse(localStorage.getItem("searchWord") || "[]").reverse()
            .map((item:{ id: number, word: string }) => (<li key={item.id}>{item.word}</li>))
          }
        </ul>
      }
    </div>
  )
}
