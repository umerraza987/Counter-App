import React, { useState } from 'react'

const Counter = () => {
    let [count,setCount] = useState(0)
    const increment = ()=>{
        setCount(++count)
    }
    const decrement = ()=>{
        if (count >0) {
            setCount(--count)
            
        }
    }
    const reset = ()=>{
        setCount(0)
    }
    
  return (
    <div>
        <h1 style={{background:"red"}}>Counter App</h1>
        <h2>{count}</h2>
        <button onClick={()=>increment()}>+Count</button>
        {
            count>0 ?
            <button onClick={()=>decrement()}>-Count</button> :
             null
            }
            <button onClick={()=>reset()}>Reset</button> 
    </div>

  )
}

export default Counter