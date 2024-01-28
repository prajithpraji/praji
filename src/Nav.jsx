import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    
    <>
  
        <div className='yellow'>
      <div className='text1'>Free Delivery : 8.30am - 9.30pm Delivery upto 45- min ~ 1 hours</div>
    
    </div>
    <div className='black'>
    <span className='place' >Thriprayar</span>
    <span ><img src="/Images/loc.png
 " alt="" className='loc'/></span>
      <input type="text" name=""  placeholder= '    Search' id="" />
      <a className='login' href="">Log in</a>
    </div>



  <div>

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
   <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li><Link className='nav-link' to="/home">Home</Link></li>
        <li><Link className='nav-link' to="/Table">Signature Cakes & Past</Link></li>
        <li><Link className='nav-link' to="/Covid">EGGLESS CAKES</Link></li>
        <li><Link className='nav-link' to="/REGFORM">Theme cake</Link></li>
        <li><Link className='nav-link' to="/Todo">Dream Cake</Link></li>       
       <li><Link className='nav-link' to="/Covi">Cookies & Chocklets</Link></li>
       <li><Link className='nav-link' to="/regfor">Breads & Snacks</Link></li>
       <li><Link className='nav-link' to="/Tod">Party Items</Link></li>
       <li><Link className='nav-link' to="/privacy">Privacy Policy</Link></li>
      </ul>
    </div>
  </div>
</nav>

      </div>



   </> 
  )
}

export default Nav