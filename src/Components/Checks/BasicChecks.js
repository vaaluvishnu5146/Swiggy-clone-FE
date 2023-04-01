import React from "react";

export default function BasicChecks({
  id = "",
  handleChange = (e) => {},
  checked,
  label = "",
}) {
  return (
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        id={id}
        checked={checked}
        onChange={handleChange}
      />
      <label class="form-check-label" for={id}>
        {label}
      </label>
    </div>
  );
}
