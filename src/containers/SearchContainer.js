import Reach from 'react';
import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

<<<<<<< HEAD
var mapStateToProps = (state) => ({});

var mapDispatchToProps = dispatch => ({
  getYouTubeVideos: q => {
    dispatch(getYouTubeVideos(q));
  }
});

=======
let mapStateToProps = (state)=> ({
  value: state.value
});
let mapDispatchToProps = (dispatch) => {
  return {
    handleSearchInputChange: (q) => {
      console.log(q)
      dispatch(handleSearchChange(q));
    }
  };
};
>>>>>>> d10283e5cf303ebf13d13585dc6209989f909948
var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
