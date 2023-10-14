import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';

function SidebarMain({issidebar}) {
  const [sidebar, setSidebar] = useState(issidebar);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className='sidebar'>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items'>
          {SidebarData.map((item, index) => (
            <li key={index} className={item.cName}>
              <Link to={item.path} onClick={showSidebar}>
                {item.icon}
                <div className='sidebarspan'><span>{item.title}</span></div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      </div>
    </>
  );
}

export default SidebarMain;
