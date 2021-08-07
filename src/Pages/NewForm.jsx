import React, { Component } from 'react'
import { newPost } from "../services/form-api"

class NewForm extends Component {
  state = {
    formData: {
      author: "",
      content: "",
      label: "",
    }
  }
  handleChange = (event) => {
    const formData = {...this.state.formData, author: this.props.user._id, [event.target.name]: event.target.value}
    this.setState({
      formData,
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      formData: {
        author: this.props.user._id,
      }
    })
    newPost(this.state.formData)
    this.props.history.push('/form')
  }
  render() { 
    console.log(this.props.user._id)
    return (
      <>
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea onChange={this.handleChange} name="content"></textarea>
          <input onChange={this.handleChange} name="label"/>
          <button>Submit Form</button>
        </form>
      </div>
      </>
    );
  }
}
 
export default NewForm;