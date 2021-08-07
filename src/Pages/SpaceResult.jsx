import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Apod } from '../services/space-apod-api' // need to match this

class SpaceResult extends Component{
  
  // set a state here of spacePhotos
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
    // console.log("this.state.search:",this.state.query.search)
    // let flag
    // if (this.state.query.search===""){
    //   flag = 1
    // } else{
    //   flag = 0
    // }
    // console.log(flag)
    return(
      // if the array of spacePhoto is null then return search field
      // else return the spacePhotos
      <>
        <div className="box">
        <form onSubmit={this.handleSubmit}>
            Search for space pictures! <br />
            <input type="input" onChange={this.handleChange} name="search" placeholder='Provide serach query' />
            <button>Search</button>
        </form>
        </div>

  

      {/* <h1>DISPLAY SPACE RESULTS</h1>
      <form onSubmit={this.handleSubmit}>
      <input onChange={this.handleChange} type="text" name="search"/>
      <button>submit</button>
    </form> */}
    {this.props.spaceData.length===0 ? 
    (<>
    <div>
      <img src={this.state.pictureOfTheDay?.hdurl} alt="Alt Text"
      width="300px"/>
      <h5>Title: {this.state.pictureOfTheDay?.title}</h5>
      <h5>Explanation: {this.state.pictureOfTheDay?.explanation}</h5>
    </div> 
    </>):<h1>Search results</h1>}
        {this.props.spaceData && 
        <>
        {/* {this.props.spaceData[1]?.links[0]?.href} */}
        
        {this.props.spaceData?.map((img,idx) =>{
          // console.log(img.links)
          // console.log(img.links[0])
          //console.log(idx,img?.links)
          if (img.links){
            return(
            <div>
              <img src={img?.links[0]?.href} />
              <div>
                Title: {img?.data[0]?.title}<br />
                Date created:{img?.data[0].date_created}<br />
                {img?.data[0].description_508 ? `Description: ${img?.data[0]?.description_508}`:""} <br />
                {img?.data[0].secondary_creater ? `Secondary Creater: ${img?.data[0]?.secondary_creater}`:""} <br />
              </div>
            </div>          
            )
          }
          
        }
        )}
        
        
        </>
        
        } 
      
      </>
    )
  }
}

export default SpaceResult