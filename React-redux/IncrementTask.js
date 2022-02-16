import React from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { buyLaptop } from './Reducer';

function IncrementTask() {

    const data1=useSelector(state => state.numOfLaptops )
    const data2=useDispatch()

    console.log(data1);
    
    
    return <div>
      <h1>{data1}</h1>
      <button onClick={()=>data2(buyLaptop())} >onclick</button>
    </div>;
}
// const mapStatetoProps=(state)=>{
//     return {data:state.numOfLaptops}

// }
// const mapDispatchToProps=(dispath)=>{
//     return {
//         data2:()=>dispath(buyLaptop())
//     }
// }
export default IncrementTask;
