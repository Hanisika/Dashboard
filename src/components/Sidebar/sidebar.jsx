import React from 'react'
import Logo from '../../imgs/logo.png';
import './sidebar.css'
import {SidebarData} from "../../Data/data";
import { FaSignOutAlt , FaBars} from 'react-icons/fa';
import { useState } from 'react';
import {motion} from 'framer-motion'



const Sidebar = () => {
   const [selected, setSelected] = useState(0)
   const [expanded,setExpanded]=useState(true)

   const sidebarVarients={
    true:{
      left:'0'
    },
    false:{
      left:'-60%'
    }
   }
  return (
    <>
      <div className="bar" style={expanded? 
        {left:"60%"} :{left:"5%"}}
        onClick={()=>setExpanded(!expanded)
        }
        >
      < FaBars/>
      </div>
      <motion.div className="sidebar" 
      varients={sidebarVarients}
     animate={window.innerwidth<=768?`${expanded}`:''}
      >
        <div className="logo">
            {/*logo */}
        <img src={Logo} alt="logo"  />
        <span>
            sh<span>o</span>ps
        </span>
    </div>
     {/* menu */}

     <div className="menu">
       {SidebarData.map((item,index)=>{
        return(
          <div className={selected===index?'menuitems active':'menuitems'}
            key={index}
          onClick={()=>setSelected(index)}>
            <item.icon/>
            <span>
              {item.heading}
            </span>
          </div>
        )})}
        <div className="menuitems">
          <FaSignOutAlt/>
        </div>
     </div>
    </motion.div>
    </> 
   
  );
};

export default Sidebar
