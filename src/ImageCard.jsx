import React from 'react'

const ImageCard=(prop)=>{
    let{url,heading,details,price}=prop
  return (
<>
<div className='ContainerMain'>
<div className='container'>
  <img className='imgg' src={url} alt="" />
  <div className='heading'>{heading}</div>
<h3 className='details'>
  {details}
</h3>
<h2 className='price'>{price}</h2>
</div>
</div>
</>
  )
}

export default ImageCard