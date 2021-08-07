import axios from "axios";
import('dotenv/config')

export {
  photos,
  apod,
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