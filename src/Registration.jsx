import React from 'react'

const Registration = () => {
  return (
    <>
    <form action="">
    <label >Title : </label>
   <select>
    <option >Choose the..</option>
    <option >Mr</option>
    <option >Ms</option>
    <option >Mrs</option>
    </select>
    <br /><br />
   <div>
   <label htmlFor="">Name :</label>
    <input type="text" name="nme" id="" placeholder='Enter the Name' />
   </div>
   <br />
   <div>
    <label htmlFor="">Father/Husband Title :</label>
    <input type="radio" name="wf"  id="" /><label htmlFor="">W/o</label>
    <input type="radio" name="wf"  id="" /><label htmlFor="">S/o</label>
    <input type="radio" name="wf"  id="" /><label htmlFor="">D/o</label>
   </div>
   <br />
   <div>
    <label htmlFor="">Father/Husband Name :</label>
    <input type="text" name="fhnme" id="" placeholder='Enter the Name' />
   </div>
   <br />
   <div>
    <label htmlFor="">Birth Date :</label>
    <input type="Date" name="date" id="" />
   </div>
   <br />
   <div>
    <label htmlFor="">Address</label>
    <input type="text" name="ads" placeholder='Enter the Address' id="" />
   </div>
   <br />
   <div>
    <label htmlFor="">Pincode :</label>
    <input type="text" name='pcd' placeholder='Enter the Pincode' />
   </div>
   <br />
   <div>
    <label htmlFor="">Mobile No :</label>
    <input type="text" name="num" placeholder='Enter the Number' id="" />
   </div>
   <br />
    <div>
        <label htmlFor="">Email id :</label>
        <input type="email" name="id" placeholder='Enter the Email' id="" />
    </div>
    <br />
    <div>
        <label htmlFor="">PAN Number :</label>
        <input type="text" name="pnum" placeholder='Enter the PAN Number' id="" />
    </div>
    </form>
    </>
  )
}

export default Registration