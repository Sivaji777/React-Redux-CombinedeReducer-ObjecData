export const ActionObj=()=>{
  return {
       type:'OBJ_DATA'
  }
}

const objectData1 = {
  model1: '',
  price1: "",
};

export const ReducerObj = (state = objectData1, Action) => {
  switch (Action.type) {
    case "OBJ_DATA":
      return {
        model1: Action.value.model,
        price1: Action.value.price,
      };
    default:
      return state;
  }
};
