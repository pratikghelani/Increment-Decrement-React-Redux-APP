// import { combineReducers } from "redux";
// import cart from './addremove';

// const rootReducer = combineReducers({
//     cart
// })
// export default rootReducer;

import changeTheNumber from "./addremove";

import { combineReducers } from "redux";

const reducers = combineReducers(
    {
    //   myNumber:changeTheNumber
        changeTheNumber
    }
);

export default reducers;