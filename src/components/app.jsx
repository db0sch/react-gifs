import React, { Component } from 'react';

import Gif from "./gif.jsx"
import GifList from "./gif_list.jsx"
import SearchInput from "./search_input.jsx"
import Giphy from "giphy-api"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gifs: [
        {id: "b9aScKLxdv0Y0"},
        {id: "EldfH1VJdbrwY"}
      ],
      selected_gif: "b9aScKLxdv0Y0"
    }
  }

  gifSelection = (event) => {
    console.log(event.currentTarget.dataset.gifId)
    this.setState({ selected_gif: event.currentTarget.dataset.gifId })
  }

  searchGiphy = (keyword) => {
    const key = "hN9MSW0SDJj9u6NpNvp6GCEf2OVWjP7g"
    console.log(keyword)
    Giphy(key).search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({ gifs: res.data })
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchInput searchMethod={this.searchGiphy} />
          <div className="selected-gif">
            <Gif id={this.state.selected_gif} selectionFunction={this.gifSelection} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectionFunction={this.gifSelection} />
        </div>
      </div>
    )
  }
}

export default App;
