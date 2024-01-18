import React, { useEffect, useState } from "react";
import IMAGES from "./Images";
import { Chart } from "chart.js";
import PieChart from "./PieChart";
import GraphChart from "./GraphChart";
import Sidebar from "./Sidebar";
import Header from "./Header";
import MainPage from "./MainPage";
import TableComponent from "./TableComponent";
import CardComponent from "./CardComponent";
// import { Chart } from "react-chartjs-2";

function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2">
            <Sidebar />
          </div>
          <div className="col-10">
            <MainPage />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
