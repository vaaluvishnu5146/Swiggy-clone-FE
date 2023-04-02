import React, { useState, useEffect } from "react";
import PageHeader from "../../Components/PageHeader/PageHeader";
import DataTable from "../../Components/DataTable/DataTable";

const GET_ALL_FOODS = "http://localhost:5000/api/food";

export default function ManageFoods() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(GET_ALL_FOODS)
      .then((response) => response.json())
      .then((response) => {
        const { data = [], message = "" } = response;
        if (message != null) {
          setData(data);
        }
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <div id="manage-food-page-container">
      <PageHeader
        name="Manage Foods"
        description="Page helps to UPDATE / DELETE / READ all foods served by particular restaurant"
      />
      <div className="container">
        <div className="card">
          <DataTable data={data} />
        </div>
      </div>
    </div>
  );
}
