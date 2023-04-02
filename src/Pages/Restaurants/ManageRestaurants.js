import React, { useState, useEffect } from "react";
import DataTable from "../../Components/DataTable/DataTable";
import PageHeader from "../../Components/PageHeader/PageHeader";
import { useNavigate } from "react-router-dom";

const GET_ALL_RESTAURANTS = "http://localhost:5000/api/restaurants";

export default function ManageRestaurants() {
  const [data, setData] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(GET_ALL_RESTAURANTS)
      .then((response) => response.json())
      .then((response) => {
        const { data = [], message = "" } = response;
        if (message != null) {
          setData(data);
        }
      })
      .catch((e) => console.log(e));
  }, []);

  function handleTableOptions(type = "", id = "") {
    console.log(type);
    switch (type) {
      case "addFood":
        console.log("ADD FOOD");
        navigate(`/foods/createFood/${id}`);
        break;
      case "updateRestaurant":
        navigate(
          `/restaurants/createRestaurant?mode=UPDATE&restaurantId=${id}`
        );
        break;
      default:
        break;
    }
  }

  return (
    <div id="manage-restaurants-page">
      <PageHeader
        name="Manage Restaurants"
        description="Page helps to CREATE / READ / MODIFY / DELETE restaurant data"
      />
      <div id="manage-restaurant-page-container" className="container">
        <DataTable data={data} handleOptions={handleTableOptions} />
      </div>
    </div>
  );
}
