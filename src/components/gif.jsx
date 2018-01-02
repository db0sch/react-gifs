import React, { Component } from 'react';

class Gif extends Component {

  render() {
    return (
      <img src={`https://media.giphy.com/media/${this.props.id}/giphy.gif`}
        alt=""
        className="gif"
        data-gif-id={this.props.id}
        onClick={this.props.selectionFunction}
      />
    );
  }
}

export default Gif;
