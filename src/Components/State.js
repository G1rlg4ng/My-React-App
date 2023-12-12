import React, { useState } from 'react'

const State = () => {
    const [text, setShowText] = useState(false);
    let [count, setCount] = useState(0);
  return (
    <div>
        <button onClick={()=>{
            setShowText(!text)
        }}>Show/Hide</button>
        {text === true && <h1>Hi, my name is Faith aka CodeBunny, you can also call me girl gang</h1>}
        <button onClick={()=>{
            setCount(count += 1);
        }}>Increase</button>
        <button onClick={()=>{
            setCount(count -= 1);
        }}>Decrease</button>
        <button onClick={()=> {
            setCount(0);
        }}>Set to Zero</button>
        {count}
    </div>
  )
}

export default State