import axios from "axios";
import('dotenv/config')

export {
  photos,
  apod,
  randomApod
}

function photos (req, res) {
  axios(`https://images-api.nasa.gov/search?q=${req.body.search}`)
  .then(results => {
    res.json(results.data.collection.items)
  })
}

function apod (req, res) {
  axios(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_KEY}`)
  .then(results => {
    res.json(results.data)
  })
  .catch(err => {
    console.log(err)
  })
}

function randomApod(req, res){
  let randomYear = 1995 + Math.floor(Math.random()*25)
  let randomMonth = Math.ceil(Math.random()*12)
  let randomDay = Math.ceil(Math.random()*28)
  axios(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_KEY}&date=${randomYear}-${randomMonth}-${randomDay}`)
  .then(results => {
    res.json(results.data)
  }).catch(err => {
    console.log(err)
  })
}