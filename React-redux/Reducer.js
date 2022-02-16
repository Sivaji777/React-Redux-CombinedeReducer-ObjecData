


export const buyLaptop=() => {
    return {
        type:"BUY_LAPTOP"
    }
}



const initialState={

    numOfLaptops:10

}

 export const laptopReducer=(state=initialState, Action)=>{

    switch (Action.type) {
        case "BUY_LAPTOP":
            return {numOfLaptops:state.numOfLaptops+1}   
        default  :
            return state
             
    }
     
}

 
