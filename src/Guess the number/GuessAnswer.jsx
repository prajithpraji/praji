import React from 'react'

const GuessAnswer = ({answer,state}) => {
    let result;
    if(state){
        if(state<answer){
            result="Your Guess is : Lower"
        }
    else    if(state>answer){
            result="Your Guess is : Higher"
        } else if (state == answer) {
            result = "Yepiie !! Your Guess is Correct !!!"
          }else{
            result="invalid input"
          }
        } 
      
  return (
  <>
 
 <h1 className={`hg animated ${result ? 'fadeIn' : ''}`}>{result}</h1>


  </>
  )
}

export default GuessAnswer