import axios from "axios"
import { Location } from "../models/location.js"
import('dotenv/config')

export {
  airPollution,
  general,
}

function general (req, res) {

}

function airPollution(req, res) {
  Location.findOne({ cityName: req.body.city})
  .then(location => {
    if(location === null) {
      addLocation(req.body.city)
    } else {

    }
  })
}

function addLocation (city) {
  axios(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.WEATHER_KEY}`)
}