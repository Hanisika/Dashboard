import './App.css';
import Sidebar from './components/Sidebar/sidebar';
import MainDash from './components/MainDash/MainDash';
import Rightside from './components/Rightside/Rightside';
import OrderForm from './components/OrderForm/OrderForm';
import { Routes, Route, Outlet } from 'react-router-dom';

const DashboardLayout = () => (
  <div className="App">
    <div className="AppGlass">
      <Sidebar />
      <div className="MainContent">
        <Outlet /> 
      </div>
      <Rightside />
    </div>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<MainDash />} />
        <Route path="orders" element={<OrderForm />} />
      </Route>
    </Routes>
  );
}

export default App;
