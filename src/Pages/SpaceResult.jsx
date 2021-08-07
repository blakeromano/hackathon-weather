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
    //spacePhoto: []
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
      // if the array of spacePhoto is null then return search field
      // else return the spacePhotos
      <>
      {/* <h2>{this.state.pictureOfTheDay?.hdurl}</h2> */}
      
      <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" >
            <Form.Label>Search for space pictures!</Form.Label>
            <Form.Control type="input" onChange={this.handleChange} name="search" placeholder='Provide serach query' />
          </Form.Group>
          <Button variant="primary">
          Search
          </Button>
        </Form>
      {/* <h1>DISPLAY SPACE RESULTS</h1>
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type="text" name="search"/>
        <button>submit</button>
      </form> */}
      {/* <div>
        <img src={this.state.pictureOfTheDay.hdurl} alt="Alt text" />
      </div> */}
      <h1> 
        Search results:
      </h1>
      
      {this.state?.search=="" ? <h2>there's something</h2>:<h2>there is nothing</h2>}
        {this.props.spaceData && 
        <>
        {/* {this.props.spaceData[1]?.links[0]?.href} */}
        
        {this.props.spaceData?.map((img,idx) =>{
          //console.log(img?.data[0])
          // console.log(img.links[0])
          // console.log(idx,img?.links)
          // wrapped around with another if statement of checking whether there is spaceData
          if (this.props.spaceData){console.log("no pictures")}
          if (img.links){
            return(
            <div>
              <img src={img?.links[0]?.href} />
              <div className="fs-6">
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
        
        
          {/*
          //console.log(item?.links)
          // return(

          //   <>
          //   <h2>{item.links?.href}</h2>
          //   {/* {item?.map(link => {
          //     return(
          //       <img src={link?.href} alt="Alt text" />
          //       )
          //   })} */}
          ////   </>
          // )
          // })} */}
         //</> 
        
        } 
      
      </>
    )
  }
}

export default SpaceResult