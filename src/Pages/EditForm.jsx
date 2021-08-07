import React, { Component } from 'react'

class EditForm extends Component {
  state = {
    formData: this.props.location.state.post,
  }
  render() { 
    console.log(this.props.location)
    return (
      <>
      
      </>
    );
  }
}
 
export default EditForm;