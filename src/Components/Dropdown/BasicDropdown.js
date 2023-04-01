import React from "react";

export default function BasicDropdown({
  label = "",
  id = "",
  options = [],
  value = "",
  handleChange = (e) => {},
}) {
  return (
    <div className="mb-3">
      <label for={id} className="form-label">
        {label}
      </label>
      <select
        class="form-select"
        aria-label="Default select example"
        id={id}
        onChange={handleChange}
      >
        <option selected>{label}</option>
        {options.map((option, index) => (
          <option key={`select-dropdown-${id}-${index}`} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
