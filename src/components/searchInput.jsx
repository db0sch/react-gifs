import React, { Component } from 'react';

class SearchInput extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <input type="text" className="form-control form-search"/>
    )
  }
}

export default SearchInput;
