import { Form } from "../models/form.js"

export {
  formIndex,
  formPost,
}

function formIndex(req, res) {
  Form.find({}).sort({createdAt: -1})
  .populate('author')
  .then(formPosts => {
    res.json(formPosts)
  })
}

function formPost(req, res) {
  console.log(req.body)
  let form = new Form(req.body)
  form.save()
  .then(form => {
    res.json(form)
  })
  
}