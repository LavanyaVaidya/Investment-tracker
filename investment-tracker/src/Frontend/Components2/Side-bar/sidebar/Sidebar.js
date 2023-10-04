import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.scss';

const sidebarNavItems = [
    {
        display: 'Dashboard',
        icon: <i className='bx bx-home'></i>,
        // to: '/',
        // section: ''
    },
    {
        display: 'Learn',
        icon: <i className='bx bx-star'></i>,
        // to: '/started',
        // section: 'started'
    },
    {
        display: 'My Transactions',
        icon: <i className='bx bx-calendar'></i>,
        // to: '/calendar',
        // section: 'calendar'
    },
    {
        display: 'Watchlist',
        icon: <i className='bx bx-user'></i>,
        // to: '/user',
        // section: 'user'
    },
    {
        display: 'Logout',
        icon: <i className='bx bx-receipt'></i>,
        // to: '/order',
        // section: 'order'
    },
]

function Sidebar () {
    const [isOpen, setIsOpen] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
      };

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar__logo">
            My Profile
        </div>
        <div ref={sidebarRef} className="sidebar__menu">
            <div
                ref={indicatorRef}
                className="sidebar__menu__indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            <div className="sidebar__menu__item__text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div></div>
    )
}

export default Sidebar;