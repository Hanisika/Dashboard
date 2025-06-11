import './App.css';
import Sidebar from './components/Sidebar/sidebar';
import MainDash from './components/MainDash/MainDash';
import Rightside from './components/Rightside/Rightside';
import OrderForm from './components/OrderForm/OrderForm';
import { Routes, Route } from 'react-router-dom';

const DashboardLayout = () => (
  <div className="App">
    <div className='AppGlass'>
      <Sidebar />
      <MainDash />
      <Rightside /> {/* This will include your button only */}
    </div>
  </div>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />} />
      <Route path="/order" element={<OrderForm />} />
    </Routes>
  );
}

export default App;
