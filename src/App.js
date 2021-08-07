import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import About from './Pages/About'
import Home from './Pages/Home'
import SearchResult from './Pages/SearchResult'

class App extends Component {
  state = {

  }
  render(){
    return (
      <>
        <Route exact path='/results' render={() => 
          <SearchResult />
        }/>
        <Route exact path='/about' render={() => 
          <About />
        }/>
        <Route exact path='/' render={() => 
          <Home />
        }/>
      </>
    );
  }
}

export default App;
