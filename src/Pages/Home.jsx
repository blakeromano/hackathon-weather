import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <>
        <br />
        <h1 class="main-title">Welcome to Weather-World</h1>
        <br />
        <div class="main-bottom">
          <div>
            <h3>Random weather info</h3>
          </div>
          <div>
            <h3>Random space info</h3>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
