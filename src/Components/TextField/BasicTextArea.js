import React from "react";

export default function BasicTextArea({
  id = "",
  label = "",
  handleChange = () => {},
  value = "",
}) {
  return (
    <div class="mb-3">
      <label for={id} class="form-label">
        {label}
      </label>
      <textarea
        class="form-control"
        id={id}
        rows="3"
        onChange={handleChange}
        value={value}
      ></textarea>
    </div>
  );
}
