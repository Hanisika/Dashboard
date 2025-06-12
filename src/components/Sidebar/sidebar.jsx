import React, { useState } from 'react';
import Logo from '../../imgs/logo.png';
import './sidebar.css';
import { SidebarData } from "../../Data/data";
import { FaSignOutAlt, FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


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
  <Link to={item.path} key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
    <div
      className={selected === index ? 'menuitems active' : 'menuitems'}
      onClick={() => {
        setSelected(index);
        setExpanded(false);
      }}
    >
      <item.icon />
      <span>{item.heading}</span>
    </div>
  </Link>
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
