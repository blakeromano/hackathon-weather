import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom'
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
        <nav>
          <ul>
          <Link to="/">Home</Link><br/>
          <Link to="/about">About</Link>
          </ul>
        </nav>
        <header>
          React Weather CRUD
        </header>

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
