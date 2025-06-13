import React, { useEffect, useState } from 'react';
import {
  fetchOrders,
  createOrder,
  updateOrder,
  deleteOrder
} from '../../api/orderService';
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
    PreferredDeliveryTime: ''
  });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchOrders()
      .then(setOrders)
      .catch((err) => console.error('Failed to fetch orders:', err.message));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        const updated = await updateOrder(editId, formData);
        setOrders((prev) => prev.map((o) => (o._id === editId ? updated : o)));
        setEditId(null);
      } else {
        const newOrder = await createOrder(formData);
        setOrders((prev) => [newOrder, ...prev]);
      }

      setFormData({
        customerName: '',
        phone: '',
        item: '',
        quantity: '',
        category: '',
        location: '',
        PreferredDeliveryTime: ''
      });
    } catch (err) {
      console.error('Failed to submit order:', err.message);
    }
  };

  const handleEdit = (order) => {
    setFormData({ ...order });
    setEditId(order._id);
  };

  const handleDelete = async (id) => {
    try {
      await deleteOrder(id);
      setOrders((prev) => prev.filter((o) => o._id !== id));
    } catch (err) {
      console.error('Failed to delete:', err.message);
    }
  };

  return (
    <div className="order-container">
      <h2>Order Management</h2>
      <form onSubmit={handleSubmit} className="order-form">
        <input
          name="customerName"
          placeholder="Customer Name"
          value={formData.customerName}
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          type="tel"
          pattern="[0-9]{10}"
          maxLength="10"
          required
        />
        <input
          name="item"
          placeholder="Item"
          value={formData.item}
          onChange={handleChange}
          required
        />
        <input
          name="quantity"
          placeholder="Quantity"
          type="number"
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
          <option value="">Select Category</option>
          <option value="Groceries">Groceries</option>
          <option value="Cloths">Cloths</option>
          <option value="Electronic Devices">Electronic Devices</option>
          <option value="Home Appliances">Home Appliances</option>
        </select>
        <input
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <input
          name="PreferredDeliveryTime"
          type="datetime-local"
          value={formData.PreferredDeliveryTime}
          onChange={handleChange}
          required
        />
        <button type="submit">{editId ? 'Update' : 'Add'} Order</button>
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
                PreferredDeliveryTime: ''
              });
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <h3>All Orders</h3>
      <table className="order-table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Phone</th>
            <th>Item</th>
            <th>Qty</th>
            <th>Category</th>
            <th>Location</th>
            <th>Delivery Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order) => (
              <tr key={order._id}>
                <td>{order.customerName}</td>
                <td>{order.phone}</td>
                <td>{order.item}</td>
                <td>{order.quantity}</td>
                <td>{order.category}</td>
                <td>{order.location}</td>
                <td>{order.PreferredDeliveryTime}</td>
                <td>
                  <button onClick={() => handleEdit(order)}>Edit</button>
                  <button onClick={() => handleDelete(order._id)}>Delete</button>
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
