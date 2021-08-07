
import React, { Component } from 'react'

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
    this.props.handleWeatherSearch(this.state.search)
  }
  render() { 
    return (
      <>



        {/* Card rendering */}

        
 

      <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" name="city" id="city" value={this.state.city}/>
          <button>Search</button>
      </form>

        {this.props.weatherData === '' && 
          <h2>Please submit a search</h2>
        }
        {this.props.weatherData &&
        <>
          <h1>Current Weather</h1>
          <button>Check Out Air Quality</button>
<div className="card-show"> 
        <div className="currentWeather">
          <div>
            <h1 className="temp">Temperature: {this.props.weatherData.current?.temp}</h1>
            <h4 className="feels">Feels Like: {this.props.weatherData.current?.feels_like}</h4>
            <h4 className="clouds">Cloud Cover: {this.props?.weatherData?.current?.clouds}%</h4>
            <h4 className="dew">Dew Point: {this.props.weatherData.current?.dew_point}</h4>
            <h4 className="uv">UV Index: {this.props.weatherData.current?.uvi}</h4>
            <h1 className="wind">Wind: {this.props.weatherData.current.wind_deg} at {this.props.weatherData.current.wind_speed} MPH</h1>
            <h4 className="sunrise">Sunrise: {this.props.weatherData.current.sunrise}</h4>
            <h4 className="sunset">Sunset: {this.props.weatherData.current.sunset}</h4>
            <h4 className="conditions">Weather Conditions: {this.props.weatherData.current.weather?.map(condition => <h5>{condition.main}: {condition.description}</h5>)}</h4>
          </div>
        </div>
        <div className="dailyWeather">
          {this.props.weatherData?.daily?.map((day, idx) => {
            return(
            <div className="mapped" key={idx}> 
              <h4>{new Date(day.dt * 1e3).toISOString().slice(0,-14)}</h4>
              <h4 className="temp">Temperature: {day.temp.day}</h4>
              <h4 className="feels">Feels Like: {day.feels_like.day}</h4>
              <h4 className="clouds">Cloud Cover: {day.clouds}%</h4>
              <h4 className="dew">Dew Point: {day.dew_point}</h4>
              <h4 className="uv">UV Index: {day.uvi}</h4>
              <h4 className="wind">Wind: {day.wind_deg} at {day.wind_speed} MPH</h4>
              <h4 className="conditions">Weather Conditions: {day.weather?.map(condition => <h5>{condition.main}: {condition.description}</h5>)}</h4>
            </div>
            )
          })}
        </div>
        <div className="hourlyWeather">
          {this.props.weatherData.hourly.map((hour, idx) => {
            return(
            <div key={idx}>
              <h4 className="date">{new Date(hour.dt * 1e3).toISOString().slice(-13, -5)}</h4>
              <h4 className="temp">Temperature: {hour.temp}</h4>
              <h4 className="feels">Feels Like: {hour.feels_like}</h4>
              <h4 className="clouds">Cloud Cover: {hour.clouds}%</h4>
              <h4 className="dew">Dew Point: {hour.dew_point}</h4>
              <h4 className="uv">UV Index: {hour.uvi}</h4>
              <h4 className="wind">Wind: {hour.wind_deg} at {hour.wind_speed} MPH</h4>
              <h4 className="conditions">Weather Conditions: {hour.weather?.map(condition => <h5>{condition.main}: {condition.description}</h5>)}</h4>
            </div>
            )
          })}
        </div>
    </div>
      </>
        }
    </>
    );
  }
}
 
export default Weather;