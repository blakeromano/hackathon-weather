import React, { Component } from 'react';

class SpaceResult extends Component{
  
  // set a state here of spacePhotos
  state = {
    search: {},
    spacePhoto: []
  } 
  
  handleSubmit = (event) =>{
    event.preventDefault()
    console.log("handleSubmit working")
  }


  render(){
    
    return(
      // if the array of spacePhoto is null then return search field
      // else return the spacePhotos
      <>
      <h1>DISPLAY SPACE RESULTS</h1>
      if (this.space.spacePhoto==null){
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="query"/>
        <button>submit</button>
      </form>
      }
      </>
    )
  }
}

export default SpaceResult