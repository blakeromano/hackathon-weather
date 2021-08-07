import React, { Component } from 'react'
import { ThemeProvider } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { indexForm, deletePost } from "../services/form-api"
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
  handleDelete = (id) => {
    deletePost(id)
    .then(deletedPost => {
       indexForm()
       .then(formPosts => {
         this.setState({
           fomrPosts: formPosts,
         })
       })
    })
    
  }
  handleUpdate = (event) => {

  }
  render() { 
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
                {post.author._id.toString() === this.props.user?._id.toString() &&
                <div>
                  <button onClick={this.handleDelete(post._id)}>Delete Post</button>
                  <button onClick={this.handleUpdate}>Update Post</button>
                </div>
              }
              </div>
            )
          })}
        </div>
      </>
    );
  }
}
 
export default Form;