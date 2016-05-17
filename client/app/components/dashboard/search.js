import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="form-group search-bar">
          <h1>how are you feeling today?</h1>
          <TextField
            onChange={this.props.handleSearchChange}
          />
          <br />
          <br />
          <RaisedButton
            onClick={this.props.handleSearchButtonClick}
            label="submit"
            primary={Boolean(true)}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

Search.propTypes = {
  handleSearchChange: React.PropTypes.func.isRequired,
  handleSearchButtonClick: React.PropTypes.func.isRequired,
};

export default Search;
