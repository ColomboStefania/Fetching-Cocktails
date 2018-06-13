import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css';
import CategoryContainer from './CategoryContainer';

import Images from './Images';
import ImagesContainer from './ImagesContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
        <Route exact path="/" component={CategoryContainer} />
        <Route exact path="/:category" component={ImagesContainer} />

        </main>
      </div>
    );
  }
}

export default App;
