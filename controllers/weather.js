import axios from "axios"
import { Location } from "../models/location.js"
import('dotenv/config')

export {
  airPollution,
  general,
  random,
}
const randomCities = ["New York", "Los Angeles", "Denver", "Seattle", "Chicago", "Miami", "Atlanta", "Boston", "Quebec", "Winnipeg", "Anchorage", "Mexico City", "Manaus", "Buenos Aires", "Cape Town", "Lagos", "Cairo", "Riyadh", "Dubai", "Madrid", "Paris", "London", "Berlin", "Athens", "Moscow", "Irkutsk", "Bangkok", "Brisbane", "Melbourne", "Jakarta", "Hong Kong", "Beijing", "Shanghai", "Chengdu", "Urumqi", "New Delhi", "Seoul", "Tokyo", "Sapporo"]
function random(req, res) {
  const randomCityIdx = Math.floor(Math.random() * randomCities.length)
  const randomCity = randomCities[randomCityIdx]
  Location.findOne({ cityName: randomCity })
  .then(location => {
    if(location === null) {
      axios(`http://api.openweathermap.org/geo/1.0/direct?q=${randomCity}&limit=1&appid=${process.env.WEATHER_KEY}`)
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
            data.data.current.cityName = randomCity
            res.json(data.data.current)
          })
        })
      })
    } else {
      axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}&units=imperial&appid=${process.env.WEATHER_KEY}`)
      .then(data => {
        data.data.current.cityName = randomCity
        res.json(data.data.current)
      })
    }
  })
  .catch(err => {
    console.log(err)
  })
  return randomCity
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
            res.json(data.data.current)
          })
        })
      })
    } else {
      axios(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}&units=imperial&appid=${process.env.WEATHER_KEY}`)
      .then(data => {
        res.json(data.data.current)
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
