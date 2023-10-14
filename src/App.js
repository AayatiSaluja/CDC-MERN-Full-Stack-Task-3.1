import './style.css';
import React, { useState } from "react";

function App(){
    const [val,setVal]=useState('')
    const [word,setWord]=useState(0)

    const handleChange =(e)=>{
        const data = e.target.value.split(' ')
        console.log(data)

        if(data.length>0){
            setVal(e.target.value)
            setWord(data.length)
            if(e.target.value === ''){
                setWord(0)
            }
        }
    }

    return(
        <div>
            <h1>Responsive Paragraph Word Counter: </h1>
            <input id="i1" value={val} onChange={(e)=>handleChange(e)} />
            <h3>Words count: {word}</h3>
        </div>
    )
}
export default App;
