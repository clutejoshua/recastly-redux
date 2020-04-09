import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

<<<<<<< HEAD
var mapStateToProps = state => ({
  video: state.currentVideo
});

var mapDispatchToProps = () => ({});

var VideoPlayerContainer = connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
=======
var mapStateToProps = (state) => ({
  video: state.currentVideo
});

var VideoPlayerContainer = connect(mapStateToProps)(VideoPlayer);
>>>>>>> d10283e5cf303ebf13d13585dc6209989f909948

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
