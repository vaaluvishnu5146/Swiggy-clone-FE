import React from "react";

export default function BasicTextField({
  id = "",
  name = "",
  label = "",
  type = "",
  placeholder = "",
  handleChange = () => {},
  value = "",
}) {
  return (
    <div className="mb-3">
      <label for={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
}
