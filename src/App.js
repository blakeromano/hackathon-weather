import React, { Component } from 'react';
import { Route} from 'react-router-dom'
import './App.css';
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Weather from "./Pages/Weather"
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

      <Route 
      exact path="/weather"
      render={() => <Weather handleWeatherSearch={this.handleWeatherSearch} weatherData={this.state.weatherData}/>}
      />
      <Footer />
      </>
    );
  }
}

export default App;
