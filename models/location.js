import mongoose from "mongoose"

const Schema = mongoose.Schema

export {
  Location
}

const locationSchema = new Schema({
  cityName: {
    type: String,
  },
  // stateCode: {
  //   type: String,
  // },
  // countryCode: {
  //   type: String,
  // },
  latitude: {
    type: String,
  },
  longitude: {
    type: String,
  },
})

const Location = mongoose.model("Location", locationSchema)