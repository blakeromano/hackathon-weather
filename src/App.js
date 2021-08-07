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

class App extends Component {
  state = {
    weatherData: {},
  }
  handleWeatherSearch = (city) => {
    weatherServices.generalWeather(city)
    .then(weatherData => {
      this.setState({
        weatherData
      })
    })
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
