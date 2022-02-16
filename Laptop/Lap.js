import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


function Lap() {

    const dis=useDispatch()
    const use=useSelector(person => person)
    console.log(use);
   const mobileObj={
        brand:'vico',
        price:'20000',  
        color:'red'
      }
    
  return (
    <div>Lap
    <h1>{use.brand}</h1>
    <button onClick={()=>dis({ type:'LAP_DATA',payload:mobileObj})} >data</button>
    </div>
      )
}

export default Lap