import axios from "axios"
import { Location } from "../models/location.js"
import('dotenv/config')

export {
  airPollution,
  general,
}

function general (req, res) {
  console.log(req.body)
  Location.findOne({ cityName: req.body.city})
  .then(location => {
    if(location === null) {
      axios(`http://api.openweathermap.org/geo/1.0/direct?q=${req.body.city}&limit=1&appid=${process.env.WEATHER_KEY}`)
      .then(results => {
        const location = new Location({
          cityName: results.data[0].name,
          latitude: results.data[0].lat,
          longitude: results.data[0].lon,
        })
        
        location.save()
        .then(location => {
          axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}&units=imperial&appid=${process.env.WEATHER_KEY}`)
          .then(data => {
            res.json(data.data)
          })
        })
      })
    } else {
      axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}&units=imperial&appid=${process.env.WEATHER_KEY}`)
      .then(data => {
        res.json(data.data)
      })
    }
  })
}

function airPollution(req, res) {
  Location.findOne({ cityName: req.body.city})
  .then(location => {
    if(location === null) {
      axios(`http://api.openweathermap.org/geo/1.0/direct?q=${req.body.city}&limit=1&appid=${process.env.WEATHER_KEY}`)
      .then(results => {
        const location = new Location({
          cityName: results.data[0].name,
          latitude: results.data[0].lat,
          longitude: results.data[0].lon,
        })
        
        location.save()
        .then(location => {
          console.log(location)
          axios(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${location.latitude}&lon=${location.longitude}&appid=${process.env.WEATHER_KEY}`)
          .then(data => {
            res.json(data.data.list[0])
          })
        })
      })
    } else {
      axios(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${location.latitude}&lon=${location.longitude}&appid=${process.env.WEATHER_KEY}`)
      .then(data => {
        res.json(data.data.list[0])
      })
    }
  })
}
