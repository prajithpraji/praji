import axios from 'axios'
import React, { useEffect } from 'react'

const Fetch = () => {
    let[state,setstate]=([])

useEffect(()=>{
    axios.get("https://api.github.com/users")
    .then(res=>console.log(res.data))
})

  return (
    <>
   <h1>Github USer</h1>
   <div>
    {
        state.map((user) =>{
        return <GitCard user={user}/>
        },[])
    }
   </div>
   </>
  )
}

export default Fetch

//Card

function GitCard(props){
    let{login,avatar_url}=props.user
}
return(
    <div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
  
    <img src={avatar_url}  />
    <p class="card-text">{login}</p>

  </div>
</div>
)



