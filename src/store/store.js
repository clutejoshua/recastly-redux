import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
<<<<<<< HEAD

const store = createStore(
  rootReducer,
  exampleVideoData,
  applyMiddleware(thunk)
=======
var initialState = {
    videoList: exampleVideoData,
    currentVideo: null
};
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk)

>>>>>>> d10283e5cf303ebf13d13585dc6209989f909948
);

export default store;
