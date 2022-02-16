import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Obj() {
const select=useSelector(state =>state)
const [name, setName]=useState('01')
    const objectData={
        model:'vivo y20',
        price:'13500',
    }
  const dispatch1=   useDispatch()
  console.log(select,"jij");
  
  return (
    <div>
    <h1>{select.modele}</h1>
    <button onClick={()=>dispatch1({type:'OBJ_DATA',value:objectData})} >obj</button>
    </div>
  )
}

export default Obj