import React from "react";

export default function PageHeader({ name = "", description = "" }) {
  return (
    <div className="page-header mb-5 p-5">
      <div className="page-header-content">
        <h1>{name || "Page Name"}</h1>
        <p>{description || "Description for this page"}</p>
      </div>
    </div>
  );
}
