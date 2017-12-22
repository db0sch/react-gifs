import React, { Component } from 'react';

class Gif extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <img src={`https://media.giphy.com/media/${this.props.id}/giphy.gif`} alt="" className="gif"/>
    )
  }
}

export default Gif;
