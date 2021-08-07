// import React from 'react';
import * as React from 'react'
const NavBar = () => {
    return ( 
        <>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark "> 
  <ul> 
    <li><a href="/"> Home</a></li> 
    <li><a href="/about">About</a></li>
    <li><a href="/">Space</a></li>
    <li><a href="/">Weather</a></li>
    {/* <li><a href="/">Mars</a></li>
    <li><a href="/">POTD</a></li> */}
    
    <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input className="btn btn-outline-success"type="submit" value="Submit" />
</form>
  </ul>
    <li><a href="/weather">Weather</a></li>
    <li><a href="/space">Space</a></li>
  </ul>
</nav> 


   
    </>  
     );
}
 
export default NavBar;

