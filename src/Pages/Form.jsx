import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { indexForm, deletePost } from "../services/form-api"
import { Button } from 'react-bootstrap';

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
  async handleDelete (id) {
    await deletePost(id)
    .then(async deletedPost => {
      await indexForm()
       .then(formPosts => {
         this.setState({
           formPosts: formPosts,
         })
       })
    })
  }
  render() { 
    return (
      <>
        <div>
          {this.props.user && 
          <Link to="/form/new">
           <Button>Create New Post</Button>
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
                  <Button onClick={() => this.handleDelete(post._id)}>Delete Post</Button>                
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