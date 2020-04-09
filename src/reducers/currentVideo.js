import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  switch (action.type) {
<<<<<<< HEAD
  case 'CHANGE_VIDEO':
    return action.video;
  default:
    return state;
=======
    case 'CHANGE_VIDEO':
      return action.video;
    default:
      return state;
>>>>>>> d10283e5cf303ebf13d13585dc6209989f909948
  }
};

export default currentVideoReducer;
