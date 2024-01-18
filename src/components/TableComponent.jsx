import React, { useEffect, useState } from "react";
import { TableData } from "./Datas";

function TableComponent() {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    // getTableData()
  }, []);
  const getTableData = () => {
    const api = "www.data.com";
    fetch(api)
      .then((res) => res.json)
      .then((result) => setTableData(result))
      .catch((err) => {
        console.log("errror fetching table data");
      });
  };
  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        {TableData.map((dataa) => (
          <tr>
            <th scope="row">{dataa.id}</th>
            <td>{dataa.name}</td>
            <td>{dataa.quantity}</td>
            <td>{dataa.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TableComponent;
