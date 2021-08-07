
import React from "react";
// import "./src/App.css";

const Footer = () =>  {
  return (
    <div className="main-footer" bg="light" expand="light" fixed="bottom">
      <div className="container" bg="light">
        <div className="row">
          {/* Column1 */}
          
          </div>
          {/* Column2 */}
         

          {/* Column3 */}
          

        <hr />

        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} WW | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;