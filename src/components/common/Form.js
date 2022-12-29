import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./Input";

export default class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const result = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });
    console.log(result);

    if (!result.error) return null;

    const errors = {}; //errors object
    //mapping details array to errors object
    for (let item of result.error.details) errors[item.path[0]] = item.message; //item.path[0] is accessing the path array in every details array. the path array contains only single element, hence path[0]
    return errors; //since errors contain message(like "username required" & "password required") so this will get returned
  };

  validateProperty = ({ name, value }) => {
    //obj object is created which contains single property i.e. either username or password. the state aspect of joi.validate(state, schema)
    const obj = { [name]: value };
    //the schema aspect of joi.validate(state, schema)
    const schema = { [name]: this.schema[name] }; //schema object which contains single property which is accessed from original schema object

    //simple destructring.
    const { error } = Joi.validate(obj, schema);

    return error ? error.details[0].message : null; //here error in single field will be checked and so details array of a single field have a single element.
  };

  handlesubmit = (e) => {
    //the default behaviour : if submit button is clicked the server gets reloaded. so that is to be prevented
    e.preventDefault();

    const errors = this.validate();
    // console.log(errors)
    this.setState({ errors: errors || {} }); //when there is no error the page would not load and become blank, instead the form will keep displaying the data as the submit button is clicked. because here only errors property is set to null and not the data property
    if (errors) return;
    this.doSubmit();

  };

  handleChange = ({ currentTarget: input }) => {
    //populating errors object in state
    const errors = { ...this.state.errors }; //errors is an object which is replica of errors object in state
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    //populating data object in state
    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data: data, errors: errors });
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary my-2">
        {label}
      </button>
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        label={label}
        value={data[name]}
        onChange={this.handleChange}
        errors={errors[name]}
      />
    );
  }
}
