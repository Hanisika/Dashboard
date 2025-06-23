import React from 'react';
import './Rightside.css';
import Updates from '../Updates/Updates';
import Customer from '../CustomerReview/Customer';
import { useNavigate } from 'react-router-dom';

const Rightside = () => {
  const email = localStorage.getItem('userEmail');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  return (
    <div className="Rightside">
      {/* ✅ Top-right email & logout */}
      <div className="top-user-info">
        <span className="user-email">{email}</span>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div>
        <h3 className='h3'>Updates</h3>
        <Updates />
      </div>

      <div>
        <h3>Customer Review</h3>
        <Customer />
      </div>
    </div>
  );
};

export default Rightside;
