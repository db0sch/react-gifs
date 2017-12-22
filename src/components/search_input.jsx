import React, { Component } from 'react';

class SearchInput extends Component {
  constructor(props) {
    super(props)
  }

  search = (event) => {
    const q = event.currentTarget.value
    this.props.searchMethod(q)
  }

  render() {
    return (
      <input type="text" className="form-control form-search" onChange={this.search}/>
    )
  }
}

export default SearchInput;
