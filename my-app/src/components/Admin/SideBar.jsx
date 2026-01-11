import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { FiPieChart, FiBarChart2, FiActivity, FiMap, FiSun, FiGrid, FiShoppingCart, FiCalendar, FiBook, FiLayers } from 'react-icons/fi';


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
                        <div style={{ width: 36, height: 36, borderRadius: 8, backgroundColor: '#2f9ae0', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>P</div>
                        {!isCollapsed && (
                            <div style={{ fontSize: 16, fontWeight: 700, color: '#2c3e50' }}>Dashboard</div>
                        )}
                    </div>

                    <Menu style={{ flex: 1, overflowY: 'auto' }}>
                        <div style={{ padding: isCollapsed ? '8px 8px' : '8px 20px', color: '#9aa4ae', fontSize: 12, textTransform: 'uppercase', textAlign: isCollapsed ? 'center' : 'left' }}>General</div>
                        <SubMenu label={isCollapsed ? '' : 'Charts'} icon={<FiActivity />}>
                            <MenuItem icon={<FiPieChart />}><Link to="/charts/pie">Pie charts</Link></MenuItem>
                            <MenuItem icon={<FiActivity />}><Link to="/charts/line">Line charts</Link></MenuItem>
                            <MenuItem icon={<FiBarChart2 />}><Link to="/charts/bar">Bar charts</Link></MenuItem>
                        </SubMenu>
                        <MenuItem icon={<FiMap />}><Link to="/maps">Maps</Link></MenuItem>
                        <MenuItem icon={<FiSun />}><Link to="/theme">Theme</Link></MenuItem>
                        <MenuItem icon={<FiGrid />}><Link to="/components">Components</Link></MenuItem>
                        <MenuItem icon={<FiShoppingCart />}><Link to="/ecommerce">E-commerce</Link></MenuItem>

                        <div style={{ padding: isCollapsed ? '8px 8px' : '8px 20px', marginTop: 12, color: '#9aa4ae', fontSize: 12, textTransform: 'uppercase', textAlign: isCollapsed ? 'center' : 'left' }}>Extra</div>
                        <MenuItem icon={<FiCalendar />}><Link to="/calendar">Calendar <span style={{ marginLeft: 8, background: '#27ae60', color: '#fff', borderRadius: 8, padding: '2px 6px', fontSize: 11, display: isCollapsed ? 'none' : 'inline-block' }}>New</span></Link></MenuItem>
                        <MenuItem icon={<FiBook />}><Link to="/documentation">Documentation</Link></MenuItem>
                        <MenuItem icon={<FiLayers />}><Link to="/examples">Examples</Link></MenuItem>
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