import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';

var rootReducer = combineReducers({currentVideo, videoList});
<<<<<<< HEAD

=======
>>>>>>> d10283e5cf303ebf13d13585dc6209989f909948

//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;
