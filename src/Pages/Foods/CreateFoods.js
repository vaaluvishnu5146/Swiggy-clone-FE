import React, { useState } from "react";
import BasicTextField from "../../Components/TextField/BasicTextField";
import BasicDropdown from "../../Components/Dropdown/BasicDropdown";
import { FOOD_TYPES } from "../../configs/mocks";
import BasicTextArea from "../../Components/TextField/BasicTextArea";
import PageHeader from "../../Components/PageHeader/PageHeader";
import { useParams } from "react-router-dom";

const api = "http://localhost:5000/api/food/";

export default function CreateFood() {
  const [food, setFood] = useState({
    offer: {},
  });
  const { id = "" } = useParams();
  function handleFormChange(e) {
    const { id = "", value = "", type = "", checked = "" } = e.target;
    const foodCopy = {
      ...food,
    };
    if (type === "checkbox") {
      if (foodCopy["foodType"].indexOf(id) > -1) {
        foodCopy["foodType"] = foodCopy["foodType"].filter((o) => o !== id);
      } else {
        foodCopy["foodType"].push(id);
      }
    } else {
      foodCopy[id] = value;
    }
    setFood(foodCopy);
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
      await fetch(api, {
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
        body: JSON.stringify({ ...food, restaurantId: id }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    }
  }

  return (
    <div id="create-restaurant-page" className="create-restaurant-page">
      <PageHeader
        name="Create Food"
        description="Page helps to CREATE/UPDATE Food for a particular restaurant"
      />
      <div className="container">
        <div className="card mb-5">
          <div class="card-header">
            <h3>Basic Details</h3>
          </div>
          <div className="card-body">
            <BasicTextField
              label="Enter Food Name"
              id="name"
              value={food["name"] || ""}
              handleChange={handleFormChange}
              placeholder="Enter Restaurant Name"
              type="text"
            />
            <BasicTextArea
              value={food["description"] || ""}
              label="Enter Food Description"
              id="description"
              handleChange={handleFormChange}
            />
            <BasicDropdown
              label="Select Food Type"
              options={FOOD_TYPES}
              id="foodType"
              value={food["foodType"] || ""}
              handleChange={handleFormChange}
            />
            <BasicTextField
              label="Enter Price"
              id="price"
              value={food["price"] || ""}
              handleChange={handleFormChange}
              placeholder="Eg. 200Inr | 300Inr"
              type="number"
            />
            <BasicTextField
              label="Enter Image Url"
              id="image"
              value={food["image"] || ""}
              handleChange={handleFormChange}
              placeholder="Copy/Paste image url"
              type="text"
            />
          </div>
        </div>
        <div className="card mb-5">
          <div class="card-header">
            <h3>Offer Details (Optional)</h3>
          </div>
          <div className="card-body">
            <BasicTextField
              label="Enter Food Name"
              id="name"
              name="offer"
              value={food["name"] || ""}
              handleChange={handleFormChange}
              placeholder="Enter Restaurant Name"
              type="text"
            />
            <BasicDropdown
              label="Select Offer Type"
              options={FOOD_TYPES}
              id="offerType"
              name="offer"
              value={food["offer"]["offerType"] || ""}
              handleChange={handleFormChange}
            />
            <BasicDropdown
              label="Select Offer Unit"
              options={FOOD_TYPES}
              id="offerUnit"
              name="offer"
              value={food["offer"]["offerUnit"] || ""}
              handleChange={handleFormChange}
            />
            <BasicTextField
              label="Enter Offer Value"
              id="offerValue"
              value={food["offer"]["offerValue"] || ""}
              handleChange={handleFormChange}
              placeholder="Eg. 200Inr | 300Inr"
              type="number"
            />
          </div>
        </div>
        <button className="btn btn-warning mb-5" onClick={handleRestaurant}>
          Add Food
        </button>
      </div>
    </div>
  );
}
