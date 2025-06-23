import './App.css';
import { Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';

import Sidebar from './components/Sidebar/sidebar';
import MainDash from './components/MainDash/MainDash';
import Rightside from './components/Rightside/Rightside';
import OrderForm from './components/OrderForm/OrderForm';
import LoginPage from './components/login/LoginPage';
import CustomerDetails from './components/Customer/CustomerDetails';
import Product from './components/products/product';
import Analytical from './components/Analytics/Analytical';

const DashboardLayout = () => {
  const location = useLocation();
  const showRightSide = location.pathname === '/';

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <div className="MainContent">
          <Outlet />
        </div>
        {showRightSide && <Rightside />}
      </div>
    </div>
  );
};

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return isLoggedIn ? children : <Navigate to="/login" />;
};

function App() {
  const [user, setUser] = useState('');

  return (
    <Routes>
      {/* Login page layout (NOT inside AppGlass) */}
      <Route path="/login" element={<LoginPage setUser={setUser} onLogin={setUser} />} />

      {/* Protected dashboard layout */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<MainDash />} />
        <Route path="orders" element={<OrderForm />} />
        <Route path="/customers"element={<CustomerDetails/>} />
        <Route path="/products"element={<Product/>} />
          <Route path="/analytics"element={<Analytical/>} />
      </Route>

      {/* Catch-all fallback */}
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
