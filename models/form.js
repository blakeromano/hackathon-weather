import mongoose from "mongoose"

const Schema = mongoose.Schema

export {
  Form
}

const formSchema = new Schema({
  content: {
    type: String,
  },
  label: {
    type: String,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
}, {
  timestamps: true,
})

const Form = mongoose.model("Form", formSchema)