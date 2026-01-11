import SideBar from './SideBar';
import './Admin.scss';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

function Admin() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    return (
        <div className="admin-container">
            <div className={`admin-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
                <SideBar isCollapsed={isCollapsed} />
            </div>
            <div className="admin-content">
                <FaBars onClick={() => setIsCollapsed(!isCollapsed)} />
            </div>
        </div>
    );
}

export default Admin;