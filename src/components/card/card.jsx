import React, { useState } from 'react';
import './card.css';
import { motion, LayoutGroup } from "framer-motion";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaTimes } from 'react-icons/fa';
import Chart from 'react-apexcharts';
import { FaDollarSign, FaMoneyBillWave, FaClipboard } from 'react-icons/fa';


const Card = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <LayoutGroup>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </LayoutGroup>
  );
};

function CompactCard({ param, setExpanded }) {
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
      onClick={setExpanded}
    >
      <div className="Radialbar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>

      <div className="detail">
        <div className="icon">
          {Icon && <Icon size={30} color="white" />} {/* ✅ Render icon here */}
        </div>
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </div>
  );
}


function ExpandedCard({ param, setExpanded }) {
  if (!param) return null;

  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      dropShadow: {
        enabled: true,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },
      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
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
    },
  };

  return (
    <motion.div
      className="expandedCard"
      style={{
        background: param.color.background,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{alignSelf:'flex-end',cursor:'pointer',color:'white'}} >
        <FaTimes onClick={setExpanded} style={{ cursor: "pointer" }} />
       
      </div>
      <span>{param.title}</span>
      <div className="chartContainer">
        <Chart series={param.series} type="area" options={data.options} />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  );
}

export default Card;
