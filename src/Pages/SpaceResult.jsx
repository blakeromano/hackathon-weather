import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

class SpaceResult extends Component{
  
  // set a state here of spacePhotos
  state = {
    query: { 
      search: ""
    },
    //spacePhoto: []
  } 
  


  handleChange = (event) =>{
    const query = {...this.state.query,[event.target.name]:event.target.value}
    this.setState({
      query
    })
  }
  handleSubmit = (event) =>{
    event.preventDefault()
    console.log("handleSubmit working")
    this.props.handleSpaceSearch(this.state.query)
  }


  render(){
    
    return(
      // if the array of spacePhoto is null then return search field
      // else return the spacePhotos
      <>
      <h1>DISPLAY SPACE RESULTS</h1>
      if (this.space.spacePhoto==null){

          <Form>
          <Form.Group className="mb-3" onSubmit={this.handleSubmit}>
            <Form.Label>Search Nasa Images</Form.Label>
            <Form.Control type="input" onChange={this.handleChange} type="text" name="search" />
            <Form.Text className="text-muted">
              Find out what Elon is doing on Mars!
            </Form.Text>
          </Form.Group>
          <Button variant="primary">
          Search
          </Button>
          </Form>
      // <form onSubmit={this.handleSubmit}>
      //   <input onChange={this.handleChange} type="text" name="search"/>
      //   <button>submit</button>
      // </form>
      }
      </>
    )
  }
}

export default SpaceResult