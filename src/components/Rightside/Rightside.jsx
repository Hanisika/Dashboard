import React from 'react'
import './Rightside.css'
import Updates from '../Updates/Updates'
import Customer from '../CustomerReview/Customer'
import { useNavigate } from 'react-router-dom';


const Rightside = () => {
  return (
    <>
    
      
        
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
  

 </> )
}

export default Rightside
