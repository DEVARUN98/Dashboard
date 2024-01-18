import { CategoryScale } from "chart.js";
import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { PieChartData } from "./Datas";
import { Chart as ChartJS } from "chart.js/auto";

function PieChart() {
  const [pie, setPie] = useState([]);

  useEffect(() => {
    // getTableData()
    // getGraphData()
    // getPieData()
  }, []);

  const getPieData = () => {
    const api = "www.data.com";
    fetch(api)
      .then((res) => res.json)
      .then((result) => setPie(result))
      .catch((err) => {
        console.error("errror getting pie data");
      });
  };

  const [pieData, setPieData] = useState({
    labels: PieChartData.map((data) => data.category),
    datasets: [
      {
        label: PieChartData.map((data) => data.category),
        data: PieChartData.map((data) => data.value),
        backgroundColor: [
          "#22d652",
          "#3ae868",
          "#60e684",
          "#87e6a0",
          "#b2edc2",
        ],
      },
    ],
  });
  // const labels = graphData.map((data) => data.x);

  return <Pie data={pieData} />;
}

export default PieChart;
