import { useEffect, useState } from 'react';
import axios from 'axios';
import Cards from '../cards/cards';
import './MainDash.css';
// import Rightside from '../Rightside/Rightside';

const MainDash = () => {
  const [orders, setOrders] = useState([]);

  // Fetch from MongoDB on mount
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/orders');
        setOrders(res.data);
      } catch (err) {
        console.error("Failed to fetch orders:", err.message);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards />
     

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
               <tr key={order._id}>
  <td>{order.customerName}</td>
  <td>{order.phone}</td> {/* ✅ fixed */}
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
