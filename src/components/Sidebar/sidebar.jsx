import React, { useState } from 'react';
import Logo from '../../imgs/logo.png';
import './sidebar.css';
import { SidebarData } from "../../Data/data";
import { FaSignOutAlt, FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion';


const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(false); // sidebar is hidden by default

  const sidebarVariants = {
    true: { left: '0' },
    false: { left: '-60%' }
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <>

      {/* Menu Icon (hamburger) */}
      {isMobile && (
        <div
          className="bar"
          onClick={() => setExpanded(!expanded)}
        >
          <FaBars />
        </div>
      )}

      {/* Sidebar */}
      <motion.div
        className="Sidebar"
        variants={sidebarVariants}
        animate={isMobile ? `${expanded}` : ''}
      >
        {/* Logo */}
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>
            sh<span>o</span>ps
          </span>
        </div>

        {/* Menu Items */}
        <div className="menu">
          {SidebarData.map((item, index) => (
            <div
              className={selected === index ? 'menuitems active' : 'menuitems'}
              key={index}
              onClick={() => {
                setSelected(index);
                setExpanded(false); // hide sidebar on menu click (mobile)
              }}
            >
              <item.icon />
              <span>{item.heading}</span>
            </div>
          ))}

          <div className="menuitems">
            <FaSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
