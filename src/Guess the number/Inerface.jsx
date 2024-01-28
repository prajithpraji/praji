import React, { useEffect, useState } from 'react'
import GuessAnswer from './GuessAnswer'

const Inerface = () => {
  let[state,setState]=useState("")
  let[answer,setAnswer]=useState("")

useEffect(()=>{
  setAnswer(Math.ceil(Math.random()*10))
},[])
function handleChange(e){
setState(e.target.value)

}

  return (
<>

<h1 className='labelg' style={{marginLeft:"500px"}} >Guess The Number </h1>
<div className='container'>
    <label className='labelg' htmlFor="">Guess the number between 1 to 10 </label> <br />
    <input className='inpg' onChange={handleChange} type="text" placeholder='Enter the number' name="inpValue" id="" />
    <GuessAnswer answer={answer} state={state}/>
    </div></>

  )
}

export default Inerface