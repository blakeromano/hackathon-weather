import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as authService from "../services/authService";
import { Button } from 'react-bootstrap';

class Login extends Component {
  state = {
    email: "",
    pw: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    const { history, handleSignupOrLogin } = this.props;
    e.preventDefault();
    try {
      await authService.login(this.state);
      handleSignupOrLogin();
      history.push("/");
    } catch (err) {
      console.log(err)
      // Use a modal or toast in your apps instead of alert
      alert('Invalid Credentials!');
    }
  };

  render() {
    const {email, pw} = this.state
    return (
      <main className="Login">
        <h3>Log In</h3>
        <form autoComplete="off" onSubmit={this.handleSubmit}>
        <label htmlFor="email">Email:  </label>
          <input
            type="text"
            autoComplete="off"
            id="email"
            value={email}
            name="email"
            onChange={this.handleChange}
          />
          <br/>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={pw}
            name="pw"
            onChange={this.handleChange}
          />
          <br/>
          <Button href="/">Log In</Button>&nbsp;&nbsp;&nbsp;
          <Button href="/">Cancel</Button>
        </form>
      </main>
    );
  }
}

export default Login;
