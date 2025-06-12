// src/utils/ChartStats.js

const getOrders = () => {
  return JSON.parse(localStorage.getItem('orders')) || [];
};

export const getTotalQuantity = () => {
  const orders = getOrders();
  return orders.reduce((sum, order) => sum + parseInt(order.quantity || 0), 0);
};

export const getCategoryData = () => {
  const orders = getOrders();
  const count = {};

  orders.forEach(({ category }) => {
    if (category) count[category] = (count[category] || 0) + 1;
  });

  return Object.entries(count).map(([name, y]) => ({ x: name, y }));
};

export const getTopLocation = () => {
  const orders = getOrders();
  const count = {};

  orders.forEach(({ location }) => {
    if (location) count[location] = (count[location] || 0) + 1;
  });

  let topLocation = '';
  let max = 0;

  Object.entries(count).forEach(([loc, freq]) => {
    if (freq > max) {
      topLocation = loc;
      max = freq;
    }
  });

  return { location: topLocation, frequency: max };
};
