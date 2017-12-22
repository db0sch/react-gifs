import React, { Component } from 'react';

import Gif from "./gif.jsx"
import GifList from "./gif_list.jsx"
import SearchInput from "./searchInput.jsx"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gifs: [
        {id: "b9aScKLxdv0Y0"},
        {id: "EldfH1VJdbrwY"}
      ],
      selected_gif: ""
    }
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchInput/>
          <div className="selected-gif">
            <Gif id="b9aScKLxdv0Y0" />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs}/>
        </div>
      </div>
    )
  }
}

export default App;
