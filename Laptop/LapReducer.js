export const LapAction=()=>{
    return {
        type:'LAP_DATA'
    }
}
const initialdata={
      brand1:'',
      price1:'',
      color1:''
}

export const LapReducer=(person=initialdata, Action)=>{
    switch(Action.type){
        case 'LAP_DATA':
            return {
                name1:Action.payload.brand,
                price1:Action.payload.price,
                color1:Action.payload.color
            }
        default :
        return person    
    }
}
