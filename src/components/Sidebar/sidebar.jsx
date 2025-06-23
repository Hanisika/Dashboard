import React, { useState } from 'react';
import Logo from '../../imgs/logo.png';
import './sidebar.css';
import { SidebarData } from "../../Data/data";
import { FaSignOutAlt, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true); // show full sidebar by default

  return (
    <>
      {/* Hamburger Icon */}
      <div className="bar" onClick={() => setExpanded(!expanded)}>
        <FaBars />
      </div>

      {/* Sidebar */}
      <div className={`Sidebar ${expanded ? 'expanded' : 'collapsed'}`}>
        {/* Logo */}
        <div className="logo">
          <img src={Logo} alt="logo" />
          {expanded && <span>sh<span>o</span>ps</span>}
        </div>

        {/* Menu Items */}
        <div className="menu">
          {SidebarData.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div
                className={selected === index ? 'menuitems active' : 'menuitems'}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                {expanded && <span>{item.heading}</span>}
              </div>
            </Link>
          ))}

          <div className="menuitems">
            <FaSignOutAlt />
            {expanded && <span>Logout</span>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
