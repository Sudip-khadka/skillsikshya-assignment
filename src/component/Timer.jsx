import React, { useState } from 'react'
import './styles.css'
import ImageChange from './ImageChange';

function Timer() {
    const [count,setCount] = useState(0);
    const add =()=>{
        setCount(count+1)
    }
    const subtract =()=>{
        setCount(count-1)
    }
    const reset =()=>{
        setCount(0)
    }

  return (
    <div className='timer'>
      <h1>Counter</h1>
        <div className="countdisplay">
            <div className="add" onClick={()=>add()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-plus-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0"/>
                </svg>
            </div>
            <div className="count">
                {count}
            </div>
            <div className="sub" onClick={()=>subtract()}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-dash-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm2.5 7.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1"/>
                </svg>
            </div>
        </div>
        {(count<0 || count>0) && <h1 onClick={()=>reset()}>Reset</h1>}
       
        {(count>5) && <h1>You Have Gone {count} steps forward</h1>}
        {(count<-5) && <h1>You Have Gone {count} steps forward</h1>}
        
        <ImageChange/>
    </div>
  )
}

export default Timer
