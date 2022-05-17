// import { createStore } from 'redux';
// import rootreducer from './reducer/index'
// const store = createStore(rootreducer);
// export default store;

import { createStore } from "redux";
import reducers  from "./reducer/index";

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
