// src/components/cards/Cards.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './cards.css';
import Card from '../card/card';

const Cards = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/orders');
        setOrders(res.data);
      } catch (err) {
        console.error("Failed to fetch orders from MongoDB:", err.message);
      }
    };

    fetchOrders();
  }, []);

  // 1. Total Quantity
  const totalQuantity = orders.reduce((sum, order) => sum + Number(order.quantity), 0);

  // 2. Category Stats
  const categoryMap = {};
  orders.forEach((order) => {
    categoryMap[order.category] = (categoryMap[order.category] || 0) + Number(order.quantity);
  });

  const categoryData = Object.entries(categoryMap).map(([category, qty], index) => ({
    x: index + 1,
    y: qty,
    label: category
  }));

  // 3. Top Location
  const locationMap = {};
  orders.forEach((order) => {
    locationMap[order.location] = (locationMap[order.location] || 0) + 1;
  });

  const topLocationEntry = Object.entries(locationMap).sort((a, b) => b[1] - a[1])[0] || ["N/A", 0];
  const [topLocation, frequency] = topLocationEntry;

  // Card data
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
        data: categoryData
      }]
    },
    {
      title: "Top Location",
      value: `${topLocation} (${frequency})`,
      barValue: 90,
      type: "area",
      color: {
        background: "linear-gradient(180deg,rgb(15, 19, 141) 0%,rgb(36, 13, 136) 100%)",
        boxShadow: "0px 10px 20px 0px #081E99"
      },
      series: [{
        name: "Location Frequency",
        data: [{ x: topLocation, y: frequency }]
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
