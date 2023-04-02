import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import RestaurantLanding from "../Pages/Restaurants/";
import FoodLanding from "../Pages/Foods/";
import CreateRestaurant from "../Pages/Restaurants/CreateRestaurant";
import ManageRestaurants from "../Pages/Restaurants/ManageRestaurants";
import CreateFoods from "../Pages/Foods/CreateFoods";
import ManageFoods from "../Pages/Foods/ManageFoods";

export default function DashboardLayout({ children }) {
  return (
    <div
      id="app-dashboard-layout-container"
      className="app-dashboard-layout-container"
    >
      <div id="sidebar" className="app-sidebar">
        <div className="branding" id="branding">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Swiggy_Text_Logo.png"
            alt="logo"
          />
        </div>
        <div id="side-bar-links">
          <ul id="sidebar-nav-list" className="sidebar-nav-list">
            <li>
              <Link className="link-style" to="/restaurants/manageRestaurant">
                Restaurants
              </Link>
            </li>
            <li>
              <Link className="link-style" to="/foods/manageFood">
                Food
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div id="app-content-area" className="app-content-area">
        <Routes>
          <Route path="restaurants" Component={() => <RestaurantLanding />}>
            <Route
              path="createRestaurant"
              Component={() => <CreateRestaurant />}
            />
            <Route
              path="manageRestaurant"
              Component={() => <ManageRestaurants />}
            />
          </Route>
          <Route path="foods" Component={() => <FoodLanding />}>
            <Route path="createFood/:id" Component={() => <CreateFoods />} />
            <Route path="manageFood/" Component={() => <ManageFoods />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}
