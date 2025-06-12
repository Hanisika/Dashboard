import { useEffect, useState } from 'react';
import Cards from '../cards/cards';
import './MainDash.css'

const MainDash = () => {
  const [refresh, setRefresh] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const handler = () => setRefresh(r => !r);
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, []);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, [refresh]);

  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards key={refresh} />

      {/* Scrollable table below cards */}
      <div className="table-wrapper">
        <h3>Recent Orders</h3>
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Mobile</th>
              <th>Item</th>
              <th>Qty</th>
              <th>Category</th>
              <th>Location</th>
              <th>Delivery Time</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.customerName}</td>
                  <td>{order.phone}</td>
                  <td>{order.item}</td>
                  <td>{order.quantity}</td>
                  <td>{order.category}</td>
                  <td>{order.location}</td>
                  <td>{order.PreferredDeliveryTime}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" style={{ textAlign: 'center' }}>
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainDash;
