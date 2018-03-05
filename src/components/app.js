import React, { Component } from 'react';
import SearchBar from "./search_bar";

import YTSearch from 'youtube-api-search'

const API_KEY = "AIzaSyAbxuztwjaakfGa5L4xb38SEW2r2a0yVak";



export default class App extends Component {

  constructor(props){
      super(props);
      this.state = { videos : [] }

      YTSearch({key : API_KEY , term :'surfboard'} , videos => this.setState({videos}))
  }

  render() {
    return (
      <SearchBar/>
    );
  }
}
