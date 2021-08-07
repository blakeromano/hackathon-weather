
import React from "react";
// import "./src/App.css";

const Footer = () =>  {
  return (
    <div className="main-footer" bg="light" expand="light" fixed="bottom">
      <div className="container" bg="light">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Weather-World</h4>
            <h1 className="list-unstyled">
              <li>342-420-6969</li>
              <li>NYC, NY</li>
              <li>125 Street </li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Stuff</h4>
            <ui className="list-unstyled">
              <li>Cool things</li>
              <li>Other things</li>
              <li>Good STUFF</li>
            </ui>
          </div>

          {/* Column3 */}
          <div className="col">
            <h4>WELL ANOTHER COLUMN</h4>
            <ui className="list-unstyled" size="sm">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ui>
          </div>
        </div>

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