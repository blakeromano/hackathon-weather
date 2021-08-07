
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
              <li>NYC, Ny</li>
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
// {/* 
// <h1> Footer Section here down  </h1>

// <section className="contact" id="contact">

// <h1 className="heading"> <span>contact</span> me </h1>

// <div className="row">

//     <div className="content">

//         <h3 className="title">contact info</h3> */}





// {/* footer contact info  */}
//         {/* <div className="info">
//             <h3> <i className="fas fa-envelope"></i> theTeam@gmail.com </h3>Name
//             <h3> <i className="fas fa-phone"></i> +718-404-8504 </h3>
//             <h3> <i className="fas fa-phone"></i> +111-222-3333 </h3>
//             <h3> <i className="fas fa-map-marker-alt"></i> Bronx, NY - 10461. </h3>
//         </div>

//     </div> */}

//     {/* <input type="form" action="">

//         <input type="text" placeholder="name" class="box">
//         <input type="email" placeholder="email" class="box">
//         <input type="text" placeholder="project" class="box">
//         <textarea name="" id="" cols="30" rows="10" class="box message" placeholder="message"></textarea>
//         <button type="submit" class="btn"> send <i class="fas fa-paper-plane"></i> </button>

//     </input> */}

// {/* </div>

// </section> */}

   
// //     </>  
// //      );
// // }
 
// // export default Footer;