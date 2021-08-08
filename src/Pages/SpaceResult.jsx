import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Apod } from '../services/space-apod-api' // need to match this

class SpaceResult extends Component{
  
  state = {
    query: { 
      search: "",
      pictureOfTheDay: ""
    },
  } 
  
  async componentDidMount(){
    console.log("SPACE RESULT: COMPONENT DID MOUNT")
    await Apod()
    .then(picture =>{
      console.log(picture)
        this.setState({
            pictureOfTheDay: picture
        })
        console.log("INSIDE THEN")
        console.log('pictureoftheday', this.state.pictureOfTheDay.hdurl)
    })
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
      <>
        <div className="box">
        <form onSubmit={this.handleSubmit}>
            <label>Search for space pictures!</label><br />
            <input type="input" onChange={this.handleChange} name="search" placeholder='Provide serach query' />
          <button variant="primary">
          Search
          </button>
        </form>
        </div>
     
    {this.props.spaceData.length===0 &&
    <>
    <div className="box">
      <img src={this.state.pictureOfTheDay?.hdurl} alt="Alt Text"
      width="300px"/>
      </div> 
      <p className="photo-content">Title: {this.state.pictureOfTheDay?.title}</p>
      <p className="photo-content">Explanation: {this.state.pictureOfTheDay?.explanation}</p>
    </>}
        {this.props.spaceData && 
        <>
        <div className="box">
        {this.props.spaceData?.map((img,idx) =>{
          if (img.links){
            return(
            <div className="spaceImg">
              <img  src={img?.links[0]?.href} /><br />
                  Title: {img?.data[0]?.title}<br />
                  Date created:{img?.data[0].date_created}<br />
                  {img?.data[0].secondary_creater ? `Secondary Creater: ${img?.data[0]?.secondary_creater}`:""} <br />
                    {img?.data[0].description_508 ? `Description: ${img?.data[0]?.description_508}`:""}
                  

            </div>          
            )
          }
        }
        )}
        </div>
        </>
        } 
      </>
    )
  }
}

export default SpaceResult