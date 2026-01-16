import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { FiPieChart, FiBarChart2, FiActivity, FiMap, FiSun, FiGrid, FiShoppingCart, FiCalendar, FiBook, FiLayers } from 'react-icons/fi';
import { RiAdminFill } from "react-icons/ri";
import { FaGem } from 'react-icons/fa';



function SideBar(props) {
    const { isCollapsed } = props;
    return (
        <div style={{ height: '100vh' }}>
            <Sidebar
                collapsed={isCollapsed}
                style={{ height: '100vh', position: 'fixed', top: 0, left: 0 }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    {/* Logo & Dashboard */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', justifyContent: isCollapsed ? 'center' : 'flex-start' }}>
                        <RiAdminFill />
                        {!isCollapsed && (
                            <Link to="/admin" style={{ fontSize: 16, fontWeight: 700, color: '#2c3e50', textDecoration: 'none' }}>Dashboard</Link>
                        )}
                    </div>

                    <Menu style={{ flex: 1, overflowY: 'auto' }}>
                        <div style={{ padding: isCollapsed ? '8px 8px' : '8px 20px', color: '#9aa4ae', fontSize: 12, textTransform: 'uppercase', textAlign: isCollapsed ? 'center' : 'left' }}>General</div>
                        <SubMenu label={isCollapsed ? '' : 'Feature'} icon={<FaGem />}>
                            <MenuItem icon={<FiPieChart />}><Link to="/admin/manage-users">Quản lý users</Link></MenuItem>
                            <MenuItem icon={<FiActivity />}><Link to="/admin/manage-quiz">Quản lý bài quiz</Link></MenuItem>
                            <MenuItem icon={<FiBarChart2 />}><Link to="/admin/manage-question">Quản lý question</Link></MenuItem>
                        </SubMenu>
                    </Menu>

                    {/* User Info */}
                    <div style={{ padding: '12px 16px', borderTop: '1px solid #e6e9ed', display: 'flex', alignItems: 'center', gap: 12, justifyContent: isCollapsed ? 'center' : 'flex-start' }}>
                        <div style={{ width: 40, height: 40, borderRadius: 999, backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2c3e50', fontWeight: 700 }}>MV</div>
                        {!isCollapsed && (
                            <>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontSize: 13, fontWeight: 700 }}>Minh Vu</div>
                                    <div style={{ fontSize: 12, color: '#7b8a92' }}>Administrator</div>
                                </div>
                                <div style={{ fontSize: 12, color: '#9aa4ae' }}>Logout</div>
                            </>
                        )}
                    </div>
                </div>
            </Sidebar>
        </div>
    );
}

export default SideBar;