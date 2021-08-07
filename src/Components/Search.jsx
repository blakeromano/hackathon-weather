import React from 'react';
//  change to class coponent 
const Search = () => {
    return ( 
        <form>
  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input className="btn btn-outline-success"type="submit" value="Submit" />
</form>
/* <div> 
    <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
</div>  */
     );
}
 
export default Search;
