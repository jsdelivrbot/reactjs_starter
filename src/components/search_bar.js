import React, {Component} from 'react';

// SearchBar Component
class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {term: ''}; //store input keyword in state
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={(event) => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  //function to capture input keyword in state and pass to callback
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
};

export default SearchBar;
