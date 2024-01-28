import React, { useState } from 'react'

const FaceBookLogin = () => {
    let[change,setChange]=useState({
       

    })
    let[error,setError]=useState({})
    let[state,setState]=useState({
        name:"",
        password:""

    
    })

function handleChange (e){
    setChange((prev)=>({
        ...prev,[e.target.name]:e.target.value
    
    }))}
function submit(e){
    
    let errors = {};

    if (!change.name) {
      errors.name = "Invalid input";
    }

    if (!change.password) {
      errors.password = "Invalid password";
    }

    setError(errors)
    setState(change)
    e.preventDefault()
    e.target.reset();
}

  return (
    <>
        <form onSubmit={submit} action="">
<label>name</label><input type="text" onChange={handleChange} name="name"  id="" /><br /><br />
<h1 style={{backgroundColor:"red"}}>{error.name}</h1>
Password: <input type="text" onChange={handleChange} name="password" id="" /><br /><br />
<h1 style={{color:"red"}}>{error.password}</h1>

<button>Submit</button>

    </form>
    <h1>Name :{state.name}</h1>
    <h2>Pssword : {state.password}</h2>

    </>
  )
}

export default FaceBookLogin