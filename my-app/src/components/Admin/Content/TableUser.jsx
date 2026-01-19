// TableUser.jsx
const TableUser = (props) => {

    const { users , setDataUpdate, setShowModalUpdate } = props;

    return (
        <div className="table-user-wrapper" style={{ maxWidth: 900, margin: '32px auto', background: '#fff', borderRadius: 16, boxShadow: '0 8px 32px rgba(0,0,0,0.10)', padding: 32 }}>
            <h2 className="table-user-title" style={{ fontSize: 28, fontWeight: 700, marginBottom: 24, color: '#6366f1', letterSpacing: 1 }}>Danh sách người dùng</h2>

            <div className="table-user-card" style={{ overflowX: 'auto' }}>
                <table className="table-user" style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, fontSize: 16 }}>
                    <thead>
                        <tr style={{ background: '#f1f5f9', color: '#6366f1', fontWeight: 600 }}>
                            <th style={{ padding: '12px 8px', borderTopLeftRadius: 12 }}>#</th>
                            <th style={{ padding: '12px 8px' }}>Tên</th>
                            <th style={{ padding: '12px 8px' }}>Email</th>
                            <th style={{ padding: '12px 8px' }}>Role</th>
                            <th style={{ padding: '12px 8px', borderTopRightRadius: 12 }}>Hành động</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="table-user-empty" style={{ textAlign: 'center', padding: 32, color: '#9aa4ae', fontSize: 18 }}>
                                    Không có dữ liệu người dùng
                                </td>
                            </tr>
                        ) : (
                            users.map((user, index) => (
                                <tr key={user.id} style={{ transition: 'background 0.2s', borderRadius: 8, boxShadow: '0 1px 4px rgba(0,0,0,0.03)' }}>
                                    <td style={{ padding: '10px 8px', fontWeight: 600 }}>{index + 1}</td>
                                    <td style={{ padding: '10px 8px' }}>{user.username}</td>
                                    <td style={{ padding: '10px 8px' }}>{user.email}</td>
                                    <td style={{ padding: '10px 8px' }}>
                                        <span style={{
                                            display: 'inline-block',
                                            padding: '4px 12px',
                                            borderRadius: 8,
                                            background: user.role === 'admin' ? '#6366f1' : '#f1f5f9',
                                            color: user.role === 'admin' ? '#fff' : '#6366f1',
                                            fontWeight: 600,
                                            fontSize: 15
                                        }}>{user.role || "USER"}</span>
                                    </td>
                                    <td className="table-user-actions" style={{ padding: '10px 8px', display: 'flex', gap: 8 }}>
                                        <button style={{ padding: '6px 14px', borderRadius: 8, border: '1px solid #6366f1', background: '#fff', color: '#6366f1', fontWeight: 600, cursor: 'pointer', transition: 'background 0.2s' }}>Xem</button>
                                        <button onClick={() => {
                                            setDataUpdate(user);
                                            setShowModalUpdate(true);
                                        }} style={{ padding: '6px 14px', borderRadius: 8, border: 'none', background: '#6366f1', color: '#fff', fontWeight: 600, cursor: 'pointer', transition: 'background 0.2s' }}>Sửa</button>
                                        <button style={{ padding: '6px 14px', borderRadius: 8, border: 'none', background: '#ef4444', color: '#fff', fontWeight: 600, cursor: 'pointer', transition: 'background 0.2s' }}>Xoá</button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableUser;
