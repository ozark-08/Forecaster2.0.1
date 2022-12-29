import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/Form";

// necesarry info at .txt
//account have been replaced with data

export default class Login extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    //call the server
    // const username = this.username.current.value;
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <div className="login-container">
          <h1>Login page</h1>
          <form onSubmit={this.handlesubmit} className="login-form">
            {this.renderInput("username", "Username")}
            {this.renderInput("password", "Password", "password")}

            {this.renderButton("Login")}
          </form>
        </div>
      </div>
    );
  }
}
