import React, { useEffect } from "react";

const GET_ALL_RESTAURANTS = "http://localhost:5000/api/restaurants";

export default function ManageRestaurants() {
  useEffect(() => {
    fetch(GET_ALL_RESTAURANTS)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  }, []);

  return <div>ManageRestaurants</div>;
}
