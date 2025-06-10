import React from 'react';
import './card.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Chart from 'react-apexcharts';
import { FaDollarSign, FaMoneyBillWave, FaClipboard } from 'react-icons/fa';

const Card = (props) => {
  return (
    <div className="CardWrapper">
      <CompactCard param={props} />
      <ChartSection param={props} />
    </div>
  );
};

// ✅ Compact card component (just visual data)
function CompactCard({ param }) {
  if (!param) return null;

  let Icon;
  switch (param.title) {
    case "Sales":
      Icon = FaDollarSign;
      break;
    case "Revenue":
      Icon = FaMoneyBillWave;
      break;
    case "Expenses":
      Icon = FaClipboard;
      break;
    default:
      Icon = null;
  }

  return (
    <div
      className="CompactCard"
      style={{
        background: param.color.background,
        boxShadow: param.color.boxShadow,
      }}
    >
      <div className="Radialbar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>

      <div className="detail">
        <div className="icon">{Icon && <Icon />}</div>
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </div>
  );
}

// ✅ ChartSection is now a fully separate component
function ChartSection({ param }) {
  if (!param || !param.series) return null;

  const chartOptions = {
    chart: { type: "area", height: "auto" },
    dropShadow: {
      enabled: true,
      top: 0,
      left: 0,
      blur: 3,
      color: "#000",
      opacity: 0.35,
    },
    fill: { colors: ["#fff"], type: "gradient" },
    dataLabels: { enabled: false },
    stroke: { curve: "smooth", colors: ["#4e73df"] },
    tooltip: { x: { format: "dd/MM/yy HH:mm" } },
    grid: { show: true },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
  };

  return (
    <div className="ChartBox">
      <Chart series={param.series} type="area" options={chartOptions} />
    </div>
  );
}

export default Card;
