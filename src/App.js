import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom'
import './App.css';
import About from './Pages/About'
import Home from './Pages/Home'
import SearchResult from './Pages/SearchResult'
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
          
            <form onSubmit>
            <input value="search me"></input>
            <button>submit</button>
            </form>
          
          </ul>
        </nav> */}

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
