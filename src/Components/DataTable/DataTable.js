import React, { useEffect, useState } from "react";

export default function DataTable({
  data = [],
  handleOptions = (type, id) => {},
}) {
  const [header, setHeader] = useState([]); // STORING DATATABLE HEADERS

  useEffect(() => {
    if (data.length > 0) {
      const keys = Object.keys(data[0]);
      setHeader(keys);
    }
    return () => {};
  }, [data]);

  function renderData(data) {
    let value;
    if (Array.isArray(data)) {
      value = data.map((o, i) => (
        <span key={i} class="badge text-bg-primary">
          {o}
        </span>
      ));
    } else if (typeof data === "boolean") {
      if (data) {
        value = "YES";
      } else {
        value = "NO";
      }
    } else {
      value = data;
    }
    return value;
  }

  return (
    <div id="data-table">
      <div className="card table-responsive">
        <table class="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              {header.length > 0
                ? header.map((h, i) => (
                    <th
                      key={`data-table-header-${i}`}
                      scope="col"
                      style={{
                        textTransform: "capitalize",
                      }}
                    >
                      {h}
                    </th>
                  ))
                : null}
            </tr>
          </thead>
          <tbody>
            {data.length > 0
              ? data.map((d, i) => (
                  <tr key={`data-table-row-${i}`}>
                    {header.map((h, i) => (
                      <td key={i}>{renderData(d[h])}</td>
                    ))}
                    <td>
                      <div
                        class="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button
                          type="button"
                          class="btn btn-primary"
                          onClick={() => handleOptions("addFood", d._id)}
                        >
                          Add Food
                        </button>
                        <button type="button" class="btn btn-warning">
                          Manage Foods
                        </button>
                        <button
                          type="button"
                          class="btn btn-info"
                          onClick={() =>
                            handleOptions("updateRestaurant", d._id)
                          }
                        >
                          Update Restaurant
                        </button>
                        <button type="button" class="btn btn-danger">
                          Delete Restaurant
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}
