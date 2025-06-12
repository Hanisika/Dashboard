import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderForm.css';

const OrderForm = () => {
  const [orders, setOrders] = useState([]);
  const [formData, setFormData] = useState({
    customerName: '',
    phone: '',
    item: '',
    quantity: '',
    category: '',
    location: '',
    PreferredDeliveryTime: '',
  });
  const [editId, setEditId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const updatedOrders = orders.map(order =>
        order.id === editId ? { ...order, ...formData } : order
      );
      setOrders(updatedOrders);
      setEditId(null);
    } else {
      const newOrder = {
        id: Date.now(),
        ...formData
      };
      setOrders(prev => [newOrder, ...prev]);
    }

    setFormData({
      customerName: '',
      phone: '',
      item: '',
      quantity: '',
      category: '',
      location: '',
      PreferredDeliveryTime: '',
    });
  };

  const handleDelete = (id) => {
    const updatedOrders = orders.filter(order => order.id !== id);
    setOrders(updatedOrders);
  };

  const handleEdit = (order) => {
    setFormData({
      customerName: order.customerName,
      phone: order.phone,
      item: order.item,
      quantity: order.quantity,
      category: order.category,
      location: order.location,
      PreferredDeliveryTime: order.PreferredDeliveryTime,
    });
    setEditId(order.id);
  };

  return (
    <div className="order-container">
      {/* Back button */}
      <div style={{ textAlign: 'right', marginBottom: '1rem' }}>
        <button
          onClick={() => navigate('/')}
          style={{
            padding: '8px 16px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Back to Home
        </button>
      </div>

      <h2>Order Management</h2>

      <form onSubmit={handleSubmit} className="order-form">
        <input
          type="text"
          name="customerName"
          placeholder="Customer Name"
          value={formData.customerName}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Enter mobile number"
          value={formData.phone}
          onChange={handleChange}
          pattern="[0-9]{10}"
          maxLength="10"
          required
        />

        <input
          type="text"
          name="item"
          placeholder="Item"
          value={formData.item}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          required
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">-- Select Category --</option>
          <option value="Groceries">Groceries</option>
          <option value="Cloths">Cloths</option>
          <option value="Electronic Devices">Electronic Devices</option>
          <option value="Home Appliances">Home Appliances</option>
        </select>

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />

        <input
          type="datetime-local"
          name="PreferredDeliveryTime"
          value={formData.PreferredDeliveryTime}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {editId ? 'Update Order' : 'Add Order'}
        </button>

        {editId && (
          <button
            type="button"
            onClick={() => {
              setEditId(null);
              setFormData({
                customerName: '',
                phone: '',
                item: '',
                quantity: '',
                category: '',
                location: '',
                PreferredDeliveryTime: '',
              });
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <hr />

      <h3>Orders</h3>
      <table className="order-table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Mobile Number</th>
            <th>Item</th>
            <th>Qty</th>
            <th>Category</th>
            <th>Location</th>
            <th>Date & Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map(order => (
              <tr key={order.id}>
                <td>{order.customerName}</td>
                <td>{order.phone}</td>
                <td>{order.item}</td>
                <td>{order.quantity}</td>
                <td>{order.category}</td>
                <td>{order.location}</td>
                <td>{order.PreferredDeliveryTime}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(order)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(order.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No orders found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrderForm;
