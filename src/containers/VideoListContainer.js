import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

<<<<<<< HEAD
var mapStateToProps = state => ({
  videos: state.videoList
});

var mapDispatchToProps = dispatch => ({
  handleVideoListEntryTitleClick: video => {
    dispatch(changeVideo(video));
  }
});

var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);
=======
let mapStateToProps = (state)=> ({
  videos: state.videoList
});
let mapDispatchToProps = (dispatch) => {
  return {
    handleVideoListEntryTitleClick: (q) => {
      dispatch(changeVideo(q));
    }
  };
};
var VideoListContainer = connect(mapStateToProps, mapDispatchToProps) (VideoList);
>>>>>>> d10283e5cf303ebf13d13585dc6209989f909948

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;
