import SideBar from './SideBar';
import './Admin.scss';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function Admin() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    return (
        <div className="admin-container">
            <div className={`admin-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
                <SideBar isCollapsed={isCollapsed} />
            </div>
            <div className="admin-content">
                <div className="admin-header">
                    <FaBars onClick={() => setIsCollapsed(!isCollapsed)} />

                </div>
                <div className="admin-main">
                    <Outlet/>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Admin;