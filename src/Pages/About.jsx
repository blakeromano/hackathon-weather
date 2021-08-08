import React, { Component } from 'react';
import { TiSocialGithubCircular } from "react-icons/ti";
import { AiFillCodeSandboxCircle, AiFillRocket  } from "react-icons/ai";

class About extends Component{
  render(){
    return(
      <>
        <br />
        <h1 class="main-subtitle">About</h1>
        <br />
        <div class="sub-bottom">
            <div>
                <p>Weather-World is a collaborative project for the xHacks 2021 Hackathon.
                    With recent travels to space and increased concerns of climate change, now is the perfect time to brings these two communities together with scientific information to better inform future legislation.
                    Weather-World also brings the space and weather communities together with a forum section where users can sign up, login, then create posts to start dialogues between communities.
                </p>
            </div>
            <br />
            <div class="sub-sub-bottom">
                <div>
                    <h1>Developers</h1>
                    <p>
                        <ul>
                        <TiSocialGithubCircular className="git" bg="red"/> <a href="https://github.com/blakeromano"><li>Blake Romano</li></a>
                            <a href="https://github.com/jaehyun1009https://github.com/jaehyun1009"><li>John Ho</li></a>
                            <a href="https://www.github.com/boyoon-c"><li>Boyoon Chang</li></a>
                            <a href="https://github.com/nrayrod1016"><li>Nick Rodriguez</li></a>
                        </ul>
                    </p>
                </div>
                <div>
                    <h1>Technologies</h1>
                    <p>
                        <ul>
                        <AiFillCodeSandboxCircle className="git" bg="red"/><br/>
                        <li>MERN Stack</li><br/>
                            <li>BCrypt</li><br/>
                            <li>JWT Auth</li><br/>
                            <li>Reactstrap</li><br/>
                            <li>React Icons</li>
                        </ul>
                    </p>
                </div>
                <div>
                        <h1>API Used</h1>
                <        AiFillRocket className="git" bg="red"/><br/>
                    <p>
                        <ul>
                            <li>NASA</li><br/>
                            <li>OpenWeatherMap</li><br/>
                            <li>APOD</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
      </>
    )
  }
}

export default About