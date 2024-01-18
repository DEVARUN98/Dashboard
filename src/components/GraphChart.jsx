import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { GraphData } from "./Datas";

function GraphChart() {
  useEffect(() => {
    // getGraphData()
  }, []);
  const [graph, setGraph] = useState([]);

  const getGraphData = () => {
    const api = "www.data.com";
    fetch(api)
      .then((res) => res.json)
      .then((result) => setGraph(result))
      .catch((err) => {
        console.log("errror getting graph data");
      });
  };

  const [userData, setUserData] = useState({
    labels: GraphData.map((data) => data.x),
    datasets: [
      {
        label: "Data",
        data: GraphData.map((data) => data.y),
        backgroundColor: ["blue"],
      },
    ],
  });
  // const labels = graphData.map((data) => data.x);

  return <Line data={userData} />;
}

export default GraphChart;
