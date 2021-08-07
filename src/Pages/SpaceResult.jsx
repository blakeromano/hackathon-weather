import React, { Component } from 'react';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';

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
    //    <Form className="search-form" onSubmit={this.handleSubmit}>
    //    <InputGroup>
    //      <Form.Control 
    //        className="search-input" 
    //        type="text" 
    //        placeholder="Search..." 
    //        name="search"
    //        onChange={this.handleChange}
    //        autoComplete="off"
    //      />
    //      <InputGroup.Prepend>
    //        <button className="btn btn-light btn-search">
    //          <span role="img" aria-label="search">🔍</span>
    //        </button>
    //      </InputGroup.Prepend>
    //    </InputGroup>
    //  </Form>

// {/* <Form onSubmit={this.handleSubmit}>
//     <Form.Group className="mb-3">
//         <Form.Label>
//           Explore

//         </Form.Label>
//         <InputGroup onChange={this.handleChange} type="text" >
//         <FormControl
//         placeholder="Search Space Images"
//         aria-label="Recipient's username"
//         aria-describedby="basic-addon2"
//         />
//         {/* <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text> */}
//         </InputGroup>
//     </Form.Group>
//           <InputGroup.Button variant="primary">
//                 Search
//           </InputGroup.Button>
// </Form> */}
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type="text" name="search"/>
        <button>submit</button>
      </form> 
      }
      </>
    )
  }
}

export default SpaceResult