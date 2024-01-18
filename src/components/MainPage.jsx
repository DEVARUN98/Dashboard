import React from "react";
import IMAGES from "./Images";
import GraphChart from "./GraphChart";
import PieChart from "./PieChart";
import TableComponent from "./TableComponent";
import { Card } from "react-bootstrap";
import CardComponent from "./CardComponent";

function MainPage() {
  return (
    <div className="mainpage m-0 p-0">
      <div className="row">
        <div className="col-2 font-weight-bold">Good Morning !</div>
        <div className="col-10">
          <div className="row">
            <div className="col-9"></div>
            <div className="profile bg-light col-3">
              John Doe <img src={IMAGES.rectangle_10} alt="" />
            </div>
          </div>
        </div>
        {/* <div className="col-10"></div> */}
      </div>

      {/* CHARTS STARTING  */}

      <div className="row mt-1 ms-3">
        <div className="col-lg-6 col-xs-12 col-md-12 bg-white ms-2 me-4 pe-2 box_shadow graph">
          <GraphChart />
        </div>
        <div className="col-lg-3 col-xs-12 bg-white box_shadow graph">
          <PieChart />
        </div>
        <div className="col-lg-1"></div>
      </div>

      {/* TABLE */}
      <div className="row mt-1 ms-3">
        <div className="col-lg-8 col-xs-12 ms-2  me-4 bg-white box_shadow">
          <TableComponent />
        </div>
        <div className="col-lg-2 col-xs-12 col-md-12 bg-white box_shadow">
          <CardComponent />
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
}

export default MainPage;
