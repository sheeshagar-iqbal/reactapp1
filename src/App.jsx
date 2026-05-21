import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count,setCount]=useState(0)
  const display=()=>{
    if (count<=0){
      alert('count is not less than 0')
    }
    else{
      setCount(count-1)
    }
  }
      
  return (
    <>
      <h1>my count app</h1>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count!=0?count- 1:count)}>decrement</button>
    </>
  )
}

export default App