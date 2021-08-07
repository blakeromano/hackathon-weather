import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { indexForm } from "../services/form-api"
class Form extends Component {
  state = {
    formPosts: [],
  }
  async componentDidMount() {
    await indexForm()
    .then(formPosts => {
      this.setState({
        formPosts: formPosts,
      })
    })
  }
  render() { 
    console.log(this.props.user)
    return (
      <>
        <div>
          {this.props.user && 
          <Link to="/form/new">
          <button>Create New Post</button>
          </Link>
          }
          {this.state.formPosts.map(post => {
            return (
              <div>
                <h1>{post.label}</h1>
                <h3>{post.content}</h3>
                <h5>Author: {post.author.name}</h5>
              </div>
            )
          })}
        </div>
      </>
    );
  }
}
 
export default Form;