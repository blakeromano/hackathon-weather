import React, { Component } from 'react';
import { Link } from "react-router-dom";
import * as authService from "../services/authService";
import {Button} from 'react-bootstrap';

class Signup extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    passwordConf: "",
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history,  handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.signup(this.state);
      handleSignupOrLogin()
      history.push("/");
    } catch (err) {
      history.push('/')
    }
  };

  isFormInvalid() {
    const { name, email, password, passwordConf } = this.state;
    return !(name && email && password === passwordConf);
  }


  render() {
    const { name, email, password, passwordConf } = this.state;
    return (
      <main>
  <div claasName="sign">
        <h3>Sign Up</h3>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            autoComplete="off"
            id="name"
            value={name}
            name="name"
            onChange={this.handleChange}
          />
          <br/>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={this.handleChange}
          /><br/>
            <label htmlFor="password">Password</label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={password}
            name="password"
            onChange={this.handleChange}
          />
          <br/>
          <label htmlFor="confirm">Confirm Password</label>
          <input
            type="password"
            autoComplete="off"
            id="confirm"
            value={passwordConf}
            name="passwordConf"
            onChange={this.handleChange}
          />
          <br/>
          <Button href="/">Sign Up</Button>
          &nbsp;&nbsp;
          <Button href="/">Cancel</Button>
        </form>
      </div>
      </main>
    );
  }
}

export default Signup;