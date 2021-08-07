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
            <li><a href="/">Mars</a></li>
            <li><a href="/">POTD</a></li>
            
        </ul> 
        </nav> 
    </>  
     );
}
 
export default NavBar;

