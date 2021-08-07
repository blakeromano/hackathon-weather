import React, { Component } from 'react'

import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider'


import { Button, Form } from 'react-bootstrap';
// import { BsHeartFill } from "react-icons/bs";

class Weather extends Component {
  state = {
    search: {
      city: '',
    },

  }
  handleChange = (event) => {
    const search = {...this.state.search, [event.target.name]: event.target.value}
    this.setState({
      search
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target)
    this.props.handleWeatherSearch(this.state.search)
  }
  render() { 
    return (
      <>

        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" >
            <Form.Label>Search Weather</Form.Label>
            <Form.Control type="input" onChange={this.handleChange} name="city" id="city" value={this.state.city} />
            <Form.Text className="text-muted">
              Stay in the know!
            </Form.Text>
          </Form.Group>
          <Button variant="primary">
          Search
          </Button>
        </Form>
        {this.props.weatherData === '' && 
          <h2>Please submit a search</h2>
        }
        {this.props.weatherData &&
        <>
        <div className="currentWeather">
          <h1>Current Weather</h1>
          <button>Check Out Air Quality</button>
          <div>
            <h4>Temperature: {this.props.weatherData.current?.temp}</h4>
            <h4>Feels Like: {this.props.weatherData.current?.feels_like}</h4>
            <h4>Cloud Cover: {this.props?.weatherData?.current?.clouds}%</h4>
            <h4>Dew Point: {this.props.weatherData.current?.dew_point}</h4>
            <h4>UV Index: {this.props.weatherData.current?.uvi}</h4>
            <h4>Wind: {this.props.weatherData.current.wind_deg} at {this.props.weatherData.current.wind_speed} MPH</h4>
            <h4>Sunrise: {this.props.weatherData.current.sunrise}</h4>
            <h4>Sunset: {this.props.weatherData.current.sunset}</h4>
            <h4>Weather Conditions: {this.props.weatherData.current.weather?.map(condition => <h5>{condition.main}: {condition.description}</h5>)}</h4>
          </div>
        </div>
        <div className="dailyWeather">
          {this.props.weatherData?.daily?.map((day, idx) => {
            return(
            <div key={idx}>
              <h4>{new Date(day.dt * 1e3).toISOString().slice(0,-14)}</h4>
              <h4>Temperature: {day.temp.day}</h4>
              <h4>Feels Like: {day.feels_like.day}</h4>
              <h4>Cloud Cover: {day.clouds}%</h4>
              <h4>Dew Point: {day.dew_point}</h4>
              <h4>UV Index: {day.uvi}</h4>
              <h4>Wind: {day.wind_deg} at {day.wind_speed} MPH</h4>
              <h4>Weather Conditions: {day.weather?.map(condition => <h5>{condition.main}: {condition.description}</h5>)}</h4>
            </div>
            )
          })}
        </div>
        <div className="hourlyWeather">
          {this.props.weatherData.hourly.map((hour, idx) => {
            return(
            <div key={idx}>
              <h4>{new Date(hour.dt * 1e3).toISOString().slice(-13, -5)}</h4>
              <h4>Temperature: {hour.temp}</h4>
              <h4>Feels Like: {hour.feels_like}</h4>
              <h4>Cloud Cover: {hour.clouds}%</h4>
              <h4>Dew Point: {hour.dew_point}</h4>
              <h4>UV Index: {hour.uvi}</h4>
              <h4>Wind: {hour.wind_deg} at {hour.wind_speed} MPH</h4>
              <h4>Weather Conditions: {hour.weather?.map(condition => <h5>{condition.main}: {condition.description}</h5>)}</h4>
            </div>
            )
          })}
        </div>
          </>
        }
      </>
    );
  }
}
 
export default Weather;
