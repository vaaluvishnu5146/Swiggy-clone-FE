import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function index() {
  return (
    <section id="restaurant-journey-container">
      <div id="page-top-navigation" className="page-top-navigation">
        <div id="start-enhancer">Start</div>
        <div id="end-enhancer" className="end-enhancer">
          <div className="link-container">
            <Link className="link-style" to="/restaurants/createRestaurant">
              Create Restaurant
            </Link>
            <Link className="link-style" to="/restaurants/manageRestaurant">
              Manage Restaurant
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container-fluid">
          <Outlet />
        </div>
      </div>
    </section>
  );
}
