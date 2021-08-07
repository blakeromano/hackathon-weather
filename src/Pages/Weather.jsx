import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap';
// import { BsHeartFill } from "react-icons/bs";
class Weather extends Component {
  state = {
    search: {
      city: '',
    },

  }
  handleChange = (event) => {
    const search = {...this.state.search, [event.target.name]: event.target.value}
    this.setState({
      search
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleWeatherSearch(this.state.search)
  }
  render() { 
    return (
      <>

<Form>
  <Form.Group className="mb-3" onSubmit={this.handleSubmit}>
    <Form.Label>Search Weather</Form.Label>
    <Form.Control type="input" onChange={this.handleChange} name="city" id="city" value={this.state.city} />
    <Form.Text className="text-muted">
      Stay in the know!
    </Form.Text>
  </Form.Group>
  <Button variant="primary">
  Search
  </Button>
</Form>

        {/* <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" name="city" id="city" value={this.state.city}/>
         <Button variant="light">Search</Button>
        </form> */}
          <h1>{this.props.weatherData.timezone}</h1>

      </>
    );
  }
}
 
export default Weather;