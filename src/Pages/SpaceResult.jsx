import React, { Component } from 'react';

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
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} type="text" name="search"/>
        <button>submit</button>
      </form>

      <h1> 
        Search results:
      </h1>
        {this.props.spaceData && 
        <>
        {/* {this.props.spaceData[1]?.links[0]?.href} */}
        
        {this.props.spaceData?.map((img,idx) =>{
          // console.log(img.links)
          // console.log(img.links[0])
          console.log(idx,img?.links)
          if (img.links){
            return(
            <img src={img?.links[0]?.href} />
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