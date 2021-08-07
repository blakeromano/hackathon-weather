import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Weather from "./Pages/Weather"
import Space from './Pages/Space'
import * as weatherServices from './services/weather-api'
import * as spaceServices from './services/space-api'
import * as spaceApod from './services/space-apod-api'
import * as authService from './services/authService'
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Form from "./Pages/Form"
import NewForm from './Pages/NewForm';
class App extends Component {
  state = {
    weatherData: "",
    spaceData:[],
    aod: "",
    user: authService.getUser(),
  }
  handleLogout = () => {
    authService.logout();
    this.setState({ user: null });
    this.props.history.push("/");
  };

  handleSignupOrLogin = () => {
    this.setState({ user: authService.getUser() });
  };

  handleWeatherSearch = (city) => {
    weatherServices.generalWeather(city)
    .then(weatherData => {
      this.setState({
        weatherData
      })
    })
  }
  handleSpaceSearch = (search) =>{
    spaceServices.search(search)
    .then(spaceData =>{
      this.setState({
        spaceData
      })
    })
  }
  getAPOD = ()=>{
    spaceApod.Apod() 
  }


  render(){
    return (
      <>
      <NavBar />
      <Route exact path="/weather"
        render={() => <Weather handleWeatherSearch={this.handleWeatherSearch} weatherData={this.state.weatherData}/>}
      />
      <Route exact path='/space' render={() => 
        <Space />
      }/>
      <Route exact path='/about' render={() => 
        <About />
      }/>
      <Route exact path='/' render={() => 
        <Home />
      }/>
      <Footer />
      </>
    );
  }
}

export default App;
