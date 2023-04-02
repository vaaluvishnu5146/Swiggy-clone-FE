import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function index() {
  return (
    <section id="restaurant-journey-container">
      <div id="page-top-navigation" className="page-top-navigation">
        <div id="start-enhancer">Start</div>
        <div id="end-enhancer" className="end-enhancer">
          <div className="link-container">
            <Link className="link-style" to="/foods/createFood">
              Create Food
            </Link>
            <Link className="link-style" to="/foods/manageFood">
              Manage Food
            </Link>
          </div>
        </div>
      </div>
      <div className="nested-page-content-container">
        <Outlet />
      </div>
    </section>
  );
}
