import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom'
import './App.css';
import About from './Pages/About'
import Home from './Pages/Home'
import WeatherResult from './Pages/WeatherResult'
import SpaceResult from './Pages/SpaceResult'
import NavBar from './Components/NavBar'


class App extends Component {
  state = {

  }
  render(){
    return (
      <>
      <NavBar /> 
      
        {/* <nav>
          <ul>
          <Link to="/">Home</Link><br/>
          <Link to="/about">About</Link>
          </ul>
        </nav> */}
        <header>
          React Weather CRUD
        </header>

        <Route exact path='/about' render={() => 
          <About />
        }/>
        <Route exact path='/weather/' render={() => 
          <WeatherResult />
        }/>
        <Route exact path='/space' render={() => 
          <SpaceResult />
        }/>
        <Route exact path='/' render={() => 
          <Home />
        }/>
      </>
    );
  }
}

export default App;
