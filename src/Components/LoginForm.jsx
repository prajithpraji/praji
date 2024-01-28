import React, { useState } from 'react'

const LoginForm = () => {
    let[state,setState]=useState({
        // name:"",
        // email:"",
        // password:""
    })
    let[change,setChange]=useState("")
    function handleChange(e){
        setState((prev)=>({
        ...prev,
        [e.target.name]:e.target.value
        }))
    }
    function submit(e){
        if(!state.name){
            console.log("name required");
        }
       else if(!state.email){
            console.log("email required");
        }
      else  if(!state.password){
            console.log("pasword required");
        }
        setChange(state)
        e.preventDefault()
        e.target.reset();
    }


  return (
    <>
    <form onSubmit={submit} action="">
<label>name</label><input type="text" onChange={handleChange} name="name"  id="" /><br /><br />
Email<input type="text" onChange={handleChange}  name="email" id="" /><br /><br />
Password: <input type="text" onChange={handleChange} name="password" id="" /><br /><br />

<button>Submit</button>

    </form>
    <h1>Name : {change.name}</h1>
    <h2>Email : {change.email}</h2>
    <h3>Password : {change.password}</h3>
    </>
  )
}

export default LoginForm