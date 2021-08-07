import React, { Component } from 'react';
import { Route} from 'react-router-dom'
import './App.css';
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Weather from "./Pages/Weather.jsx"
import SpaceResult from './Pages/SpaceResult'
import * as weatherServices from './services/weather-api'
import * as spaceServices from './services/space-api'

class App extends Component {
  state = {
    weatherData: {},
    spaceData:{}
  }
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


  render(){
    return (
      <>
      <NavBar /> 

      <Route 
      exact path="/weather"
      render={() => <Weather handleWeatherSearch={this.handleWeatherSearch} weatherData={this.state.weatherData}/>}
      />
      <Route 
      exact path="/space"
      render={() => <SpaceResult handleSpaceSearch={this.handleSpaceSearch} spaceData={this.state.spaceData}/>}
      />
      <Footer />
      </>
    );
  }
}

export default App;
