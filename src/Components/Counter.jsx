import React, { useState } from 'react'

const Counter = () => {
let[count,setCount]=useState(0)
function increase(prev){
    setCount((prev)=>(prev+1))
}
function decrease(){
    setCount(count-1)
}
  return (
   <>
   <button onClick={increase}>Increase</button>
   <h1>Count {count} </h1>
<button onClick={decrease}>Decrease</button>
   </>
  )
}

export default Counter