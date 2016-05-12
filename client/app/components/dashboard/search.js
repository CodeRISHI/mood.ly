import React, { PropTypes, Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <div className="form-group">
          <input
            onChange={this.props.handleSearchChange}
            className="form-control" type="text" placeholder="how are you feeling?"
          />
          <button onClick={this.props.handleSearchButtonClick} value="Submit!">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  handleSearchChange: PropTypes.func.isRequired,
  handleSearchButtonClick: PropTypes.func.isRequired,
};

export default Search;