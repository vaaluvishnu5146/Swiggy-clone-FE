import React from "react";

export default function BasicTextField({
  id = "",
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
        id={id}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
}
