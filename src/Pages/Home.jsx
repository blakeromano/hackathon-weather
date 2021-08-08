import React, { Component } from 'react';
import { randomApod } from '../services/space-apod-api'
import { random } from '../services/weather-api';

class Home extends Component {
  state = {
    randomCity: '',
    randomPicture: ''
  }
  async componentDidMount(){
    await random()
    .then(city => {
      this.setState({
        randomCity: city
      })
    })
    await randomApod()
    .then(picture => {
      this.setState({
        randomPicture: picture
      })
    })
  }
  render() {
    let weatherImgUrl = ''
    let weatherId = this.state.randomCity?.weather?.[0].id
    if ([200, 201, 202, 210, 211, 212, 221, 230, 231, 232].includes(weatherId))
      weatherImgUrl = 'https://openweathermap.org/img/wn/11d.png'
    if ([300, 301, 302, 310, 311, 312, 313, 314, 321].includes(weatherId))
      weatherImgUrl = 'https://openweathermap.org/img/wn/09d.png'
    if ([500, 501, 502, 503, 504].includes(weatherId))
      weatherImgUrl = 'https://openweathermap.org/img/wn/10d.png'
    if ([511, 600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622].includes(weatherId))
      weatherImgUrl = 'https://openweathermap.org/img/wn/13d.png'
    if ([520, 521, 522, 531].includes(weatherId))
      weatherImgUrl = 'https://openweathermap.org/img/wn/09d.png'
    if ([700, 711, 721, 731, 741, 751, 761, 762, 771, 781].includes(weatherId))
      weatherImgUrl = 'https://openweathermap.org/img/wn/50d.png'
    if (weatherId === 800)
      weatherImgUrl = 'https://openweathermap.org/img/wn/01d.png'
    if (weatherId === 801)
      weatherImgUrl = 'https://openweathermap.org/img/wn/02d.png'
    if (weatherId === 802){
      weatherImgUrl = 'https://openweathermap.org/img/wn/03d.png'
    }
    if (weatherId === 803 || weatherId === 804){
      weatherImgUrl = 'https://openweathermap.org/img/wn/03d.png'
    }
    return (
      <>
        <br />
        <h1 className="main-title">Welcome to Weather-World</h1>
        <br />
        <div class="main-bottom">
          <div>
            <img src={weatherImgUrl}
              alt="Alt Text"
              width="200px"/>
            <h1>{this.state.randomCity?.cityName}</h1>
            <h2>Weather: {this.state.randomCity?.weather?.[0].main}</h2>
            <h4>Temperature: {this.state.randomCity?.temp}°F</h4>
            <h4>Feels Like: {this.state.randomCity?.feels_like}°F</h4>
            <h4>Humidity: {this.state.randomCity?.humidity}%</h4>
            <h4>Dew Point: {this.state.randomCity?.dew_point}°F</h4>
          </div>
          <div>
            <img src={this.state.randomPicture?.hdurl}
              alt="Alt Text"
              width="350px"/>
            <h5>{this.state.randomPicture?.title}</h5>
          </div>
        </div>
      </>
    );
  }
}

export default Home;