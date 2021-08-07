import { Form } from "../models/form.js"

export {
  formIndex,
  formPost,
  formDelete,
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

function formDelete(req, res) {
  Form.findByIdAndDelete(req.params.id)
  .then(deletedFormPost => {
    res.json(deletedFormPost)
  })
  .catch(err => {
    console.log(err)
  })
}