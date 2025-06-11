import React from 'react'
import './Rightside.css'
import Updates from '../Updates/Updates'
import Customer from '../CustomerReview/Customer'
import { useNavigate } from 'react-router-dom';


const Rightside = () => {
  const navigate = useNavigate();

  const goToOrderPage = () => {
    navigate('/order'); // Navigate to OrderForm page
  };
 
  return (
    <>
    <div style={{ padding: "20px" }}>
      
      {/* Top right order button */}
      <div style={{ textAlign: 'right' }}>
        <button onClick={goToOrderPage} style={{
          padding: '10px 20px',
          backgroundColor: '#28a745',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          margin:'3rem'
        }}>
          Go to Order Form
        </button>
      </div>
      
        
  <div className="Rightside">
    <div>
        <h3 className='h3'>Updates</h3>
       <Updates/>
     
    </div>
    <div>
        <h3>Customer Review</h3>
          <Customer/>
    </div>
  </div>  
  </div>

 </> )
}

export default Rightside
