// src/components/cards/Cards.jsx

import React from 'react';
import './cards.css';
import Card from '../card/card';
import {
  getTotalQuantity,
  getCategoryData,
  getTopLocation
} from '../../utils/ChartStats';

const Cards = () => {
  const totalQuantity = getTotalQuantity();
  const categoryData = getCategoryData();
  const topLocation = getTopLocation();

// Fix x-axis: Convert categories to numeric x (index) + store label
const convertedCategoryData = categoryData.map((item, index) => ({
  x: index + 1,
  y: item.y,
  label: item.x
}));


  const cardsData = [
    {
      title: "Total Products",
      value: totalQuantity,
      barValue: 100,
      type: "bar",
      color: {
        background: "linear-gradient(180deg, #4facfe 0%,rgb(10, 97, 212) 100%)",
         boxShadow: "0px 10px 20px 0px #077BBE"
      },
      series: [{
        name: "Products",
        data: [{ x: "All", y: totalQuantity }]
      }]
    },
  {
  title: "Order Categories",
  value: categoryData.reduce((sum, item) => sum + item.y, 0),
  barValue: 80,
  type: "bar",
  color: {
    background: "linear-gradient(180deg,rgb(114, 17, 167) 0%,rgb(110, 13, 171) 100%)",
    boxShadow: "0px 10px 20px 0px #3F0373"
  },
  series: [{
    name: "Categories",
    data: convertedCategoryData
  }]
},
    {
      title: "Top Location",
      value: `${topLocation.location} (${topLocation.frequency})`,
      barValue: 90,
      type: "area",
      color: {
        background: "linear-gradient(180deg,rgb(15, 19, 141) 0%,rgb(36, 13, 136) 100%)",
        boxShadow: "0px 10px 20px 0px #081E99"
      },
      series: [{
        name: "Location Frequency",
        data: [{ x: topLocation.location, y: topLocation.frequency }]
      }]
    }
  ];

  return (
    <div className="cards">
      {cardsData.map((card, i) => (
        <div className="parentcontainer" key={i}>
          <Card {...card} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
