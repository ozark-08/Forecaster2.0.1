import React from "react";

export default function Input({ name, value, label, onChange, errors, type }) {
  return (
    <>
      <div className="from-group">
        <label htmlFor={name}>{label}</label>
        <input
          // ref={this.username}
          autoFocus
          id={name}
          value={value}
          onChange={onChange}
          name={name}
          type={type}
          className="form-control me-2"
        />
      </div>

      {/* if error is truthy then execute the next half of AND operator */}
      {errors && <div className="alert alert-danger">{errors}</div>}
    </>
  );
}
