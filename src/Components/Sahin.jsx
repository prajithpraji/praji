import React from 'react'

const Sahin = (props) => {
    const{clr,name,car}=props

  return (
    <>
    
    <h1>my bike clr is {clr}</h1>
    <h1>my {name}</h1>
    <h1>{car.name },{car.model}</h1>
    </>
  )
}

export default Sahin