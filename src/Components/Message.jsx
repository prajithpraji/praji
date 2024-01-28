import React, { useState } from 'react'


const Message = () => {

let[state,setState]=useState([1])
function add(prev){
setState((prev)=>[...prev,prev.length+1])
}
  return (
  <>
  <button onClick={add}>Add</button>
<ul>
{

 state.map((value)=>{
    return <li>Item {value}</li>
 })
}

</ul>
  
  </>

  )
}

export default Message