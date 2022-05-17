// const cart = (state = 0, action) =>{
//     switch(action.type){
//         case  "ADD" : return state + 1;
//         case  "REMOVE" :  return state - 1;
//         default : return  state;
//     }
// }

// export default cart;

const initialState = 10;

const changeTheNumber = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT": return state + action.payload;
        case "DECREMENT": return state - action.payload;
        default: return state;
    }
}

export default changeTheNumber;