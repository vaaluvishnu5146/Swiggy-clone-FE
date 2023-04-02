import React, { useState, useEffect } from "react";
import BasicTextField from "../../Components/TextField/BasicTextField";
import BasicDropdown from "../../Components/Dropdown/BasicDropdown";
import {
  CITIES,
  RESTAURANT_CUISINE,
  RESTAURANT_TYPES,
  STATES,
} from "../../configs/mocks";
import BasicTextArea from "../../Components/TextField/BasicTextArea";
import BasicChecks from "../../Components/Checks/BasicChecks";
import PageHeader from "../../Components/PageHeader/PageHeader";
import { useSearchParams } from "react-router-dom";

//     "name": "Avadh amreli",
//     "category": "hotel",
//     "city": "amreli",
//     "state": "Telengana",
//     "address": "Ayyappa Society, Mega Hills, Madhapur, Hyderabad, Telangana",
//     "pincode": "500081",
//     "cuisine": ["chinese"],
//     "foodType": ["non-veg"]

const CREATE_RESTAURANT_API = "http://localhost:5000/api/restaurants/";
const GET_RESTAURANT_BY_ID_API = "http://localhost:5000/api/restaurants/";

export default function CreateRestaurant() {
  const params = useSearchParams()[0];
  const mode = params.get("mode");
  const restaurantId = params.get("restaurantId");
  const [restaurant, setRestaurant] = useState({
    foodType: [],
  });

  useEffect(() => {
    if (mode === "UPDATE" && restaurantId) {
      fetch(`${GET_RESTAURANT_BY_ID_API}${restaurantId}`)
        .then((response) => response.json())
        .then((data) => setRestaurant(data?.data))
        .catch((e) => console.log(e));
    }
    return () => {};
  }, [mode, restaurantId]);

  function handleFormChange(e) {
    const { id = "", value = "", type = "", checked = "" } = e.target;
    const restaurantCopy = {
      ...restaurant,
    };
    if (type === "checkbox") {
      if (restaurantCopy["foodType"].indexOf(id) > -1) {
        restaurantCopy["foodType"] = restaurantCopy["foodType"].filter(
          (o) => o !== id
        );
      } else {
        restaurantCopy["foodType"].push(id);
      }
    } else {
      restaurantCopy[id] = value;
    }
    setRestaurant(restaurantCopy);
  }

  function isExisting(data = {}, key = "", id = "") {
    return data[key]?.indexOf(id) > -1 ? true : false;
  }

  /**
   * ONCLICK FIRES
   * IO OPERATION
   * METHOD = POST
   * PARAMS = {...restaurant}
   */
  async function handleRestaurant(e) {
    if (e) {
      await fetch(CREATE_RESTAURANT_API, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer",
        body: JSON.stringify(restaurant),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    }
  }

  return (
    <div id="create-restaurant-page" className="create-restaurant-page">
      <PageHeader
        name={
          mode && mode === "UPDATE" ? "Update Restaurant" : "Create Restaurant"
        }
        description="Page helps to CREATE RESTAURANT data"
      />
      <div className="container">
        <div className="card">
          <div className="card-body">
            <BasicTextField
              label="Enter Restaurant Name"
              id="name"
              value={restaurant["name"] || ""}
              handleChange={handleFormChange}
              placeholder="Enter Restaurant Name"
              type="text"
            />
            <BasicDropdown
              label="Select Restaurant Type"
              options={RESTAURANT_TYPES}
              id="category"
              value={restaurant["category"] || ""}
              handleChange={handleFormChange}
            />
            <BasicDropdown
              value={restaurant["city"] || ""}
              label="Select City"
              id="city"
              options={CITIES}
              handleChange={handleFormChange}
            />
            <BasicDropdown
              value={restaurant["state"] || ""}
              label="Select State"
              id="state"
              options={STATES}
              handleChange={handleFormChange}
            />
            <BasicTextArea
              value={restaurant["address"] || ""}
              label="Enter Address"
              id="address"
              handleChange={handleFormChange}
            />
            <BasicTextField
              label="Enter Pincode"
              id="pincode"
              value={restaurant["pincode"] || ""}
              handleChange={handleFormChange}
              placeholder="Eg. 642001"
              type="number"
            />
            <BasicDropdown
              label="Select Cuisine"
              options={RESTAURANT_CUISINE}
              id="cuisine"
              value={restaurant["cuisine"] || ""}
              handleChange={handleFormChange}
            />
            <div className="mb-5" id="food-type-container">
              <BasicChecks
                label="Veg"
                id="veg"
                handleChange={handleFormChange}
                checked={isExisting(restaurant, "foodType", "veg")}
              />
              <BasicChecks
                label="Non Veg"
                id="non veg"
                handleChange={handleFormChange}
                checked={isExisting(restaurant, "foodType", "non veg")}
              />
            </div>
            <button className="btn btn-warning" onClick={handleRestaurant}>
              Add Restaurant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
