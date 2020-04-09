import React from 'react';
//import getYouTubeVideos from '/components/App.js';


<<<<<<< HEAD

=======
>>>>>>> d10283e5cf303ebf13d13585dc6209989f909948
class Search extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          onChange={(e) => this.props.handleSearchInputChange(e.target.value)}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default Search;
