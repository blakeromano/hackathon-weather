import React, { Component } from 'react';
import { Route} from 'react-router-dom'
import './App.css';
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import Weather from "./Pages/Weather.jsx"
import SpaceResult from './Pages/SpaceResult'
import * as weatherServices from './services/weather-api'
import * as spaceServices from './services/space-api'
import * as authService from './services/authService'
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Form from "./Pages/Form"
import NewForm from './Pages/NewForm';
import About from './Pages/About'
import Home from './Pages/Home'
class App extends Component {
  state = {
    weatherData: "",
    spaceData:[],
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


  render(){
    return (
      <>
      <NavBar user={this.state.user} handleLogout={this.handleLogout} /> 
      <Route
          exact
          path="/form"
          render={({ history }) => (
            <Form
              history={history}
              user={this.state.user}
            />
          )}
        />
      <Route
        exact
        path="/form/new"
        render={({ history }) => (
          <NewForm
            history={history}
            user={this.state.user}
          />
        )}

      />
      <Route
          exact
          path="/signup"
          render={({ history }) => (
            <Signup
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={({ history }) => (
            <Login
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          )}
        />
      <Route 
      exact path="/weather"
      render={() => <Weather handleWeatherSearch={this.handleWeatherSearch} weatherData={this.state.weatherData}/>}
      />
      <Route 
      exact path="/space"
      render={() => <SpaceResult handleSpaceSearch={this.handleSpaceSearch} spaceData={this.state.spaceData}/>}
      />
      <Route
      exact path="/about"
      render={() => <About />}
      />
      <Route
      exact path="/"
      render={() => <Home />}
      />
      <Footer />
      </>
    );
  }
}

export default App;
