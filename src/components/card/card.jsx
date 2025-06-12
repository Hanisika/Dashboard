import React from 'react';
import './card.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Chart from 'react-apexcharts';
import { FaDollarSign, FaMoneyBillWave, FaClipboard } from 'react-icons/fa';

const Card = ({ title, type, color, barValue, value, series }) => {
  // Choose an icon based on the title
  let Icon;
  switch (title) {
    case "Top Products":
      Icon = FaClipboard;
      break;
    case "Active Days":
      Icon = FaMoneyBillWave;
      break;
    case "Profit Chart":
      Icon = FaDollarSign;
      break;
    default:
      Icon = FaClipboard;
  }

  const chartType = type === 'pie' ? 'line' : type; // fallback if needed

  const chartOptions = {
  chart: {
    type: chartType,
    height: "auto",
  },
  stroke: {
    curve: "smooth",
    colors: ["#4e73df"],
  },
  fill: {
    type: "gradient",
  },
  grid: {
    show: true,
  },
  xaxis: {
    type: "category",
    categories: series[0].data.map(d => d.label || d.x)  // Add this!
  },
  dataLabels: {
    enabled: false,
  },
  colors: ["#FF6384", "#36A2EB", "#FFCE56"],
};


  return (
    <div className="CardWrapper">
      {/* Compact Card Display */}
      <div className="CompactCard" style={{
        background: color.background,
        boxShadow: color.boxShadow,
      }}>
        <div className="Radialbar">
          <CircularProgressbar value={barValue} text={`${barValue}%`} />
          <span>{title}</span>
        </div>

        <div className="detail">
          <div className="icon">
            <Icon />
          </div>
          <span>${value}</span>
          <span>Last 24 hours</span>
        </div>
      </div>

      {/* Chart Section */}
      <div className="ChartBox">
        <Chart
          options={chartOptions}
          series={series}
          type={chartType}
          height={300}
        />
      </div>
    </div>
  );
};

export default Card;
