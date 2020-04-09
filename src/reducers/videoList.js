import Redux from 'redux';

var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
<<<<<<< HEAD
  switch (action.type) {
  case 'CHANGE_VIDEO_LIST':
    return action.videos;
  default:
    return state;
=======
  switch(action.type) {
    case 'CHANGE_VIDEO_LIST':
      return action.videos;
    default:
      return state;
>>>>>>> d10283e5cf303ebf13d13585dc6209989f909948
  }
};

export default videoListReducer;
