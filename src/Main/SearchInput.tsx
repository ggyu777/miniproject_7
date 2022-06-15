import { off } from 'process';
import React, { useState } from 'react'

export default function SearchInput(props:any) {
    const [timer, setTimer] = useState();

    const handleInputChange = (e:any) => {
        if (timer) {  //0.5초 미만으로 입력이 주어질 경우 해당 timer를 clear
            clearTimeout(timer);
        }
        const newTimer:any = setTimeout(() => {
            props.setInputValue(e.target.value);
            const localKeyword:any = localStorage.getItem("keyword");

            if(localKeyword == null){
                localStorage.setItem('keyword',e.target.value);
            }
            else{
                const a = [...localKeyword.split(','), e.target.value]

                localStorage.setItem('keyword', a.toString());


                // if(a.length > 5){
                //     const b = 
                // }
                // else{
                //     localStorage.setItem('keyword', a.toString());
                // }
                
            }

            // if(localKeyword.split(',').length >= 5 || localKeyword === false){
            //     let LocalStorageList = localKeyword.split(',');
            //     LocalStorageList.reverse().pop()
            //     console.log(LocalStorageList)
            //     LocalStorageList.push(e.target.value)
            //     localStorage.setItem("keyword",LocalStorageList.reverse().toString())
            // }
            // else{
            //     localStorage.setItem("keyword",localKeyword.split(',').push(e.target.value).toString())
            // }

            
        }, 500); //입력 후 0.5초 이상 지나면 e.target.value를 담는 함수 실행
        setTimer(newTimer);
    }

    return (
        <div>
            <input type="text" placeholder="KeyWord" onChange={handleInputChange} />
            {/* <button>Search</button> */}
        </div>
    )
}