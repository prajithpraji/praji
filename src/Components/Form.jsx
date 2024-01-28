import React, { useState } from 'react'

const Form = () => {
    let[state,setState]=useState("")
    let[sub,setsub]=useState("")
    function change(e){
setState(e.target.value)
    }
    function submit(e){
        setsub(state)
        e.preventDefault()
    }

  return (
    <div>
<form onSubmit={submit} action="">
<input onChange={change} type="text"  />
<button>Submit</button>


</form>

<h1>{sub}</h1>

    </div>
  )
}

export default Form