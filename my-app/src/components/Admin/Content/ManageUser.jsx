import Button from 'react-bootstrap/Button';
import ModalCreateUser from './ModalCreateUser'; 
import TableUser from './TableUser';
import { useEffect, useState } from "react";
import { getAllUsers } from '../../../services/apiServices';
import ModalUpdateUser from './ModalUpdateUser';
import ModalDeleteUser from './ModalDeleteUser';

const ManageUser = (props) => {
    const [showModalCreate, setShowModalCreate] = useState(false);
    const [showModalUpdate, setShowModalUpdate] = useState(false);
    const [showModalDelete , setShowModalDelete] = useState(false);
    const [dataUpdate , setDataUpdate] = useState({});  
    

    const [users, setUsers] = useState([]);


    const fetchUsers = async () => {
        try {
            let res = await getAllUsers();
            if (res && res.EC === 0) {
                setUsers(res.DT);
            }
        }
        catch (error) {
            console.log("Error fetching users: ", error);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);


    const handleClickAddNew = () => {
        setShowModalCreate(true);
    }

    return (
        <div className="manage-user-container">
            <div className="title">
                Manage Users
            </div>
            <div className="users-content">
                <div>
                    <Button onClick={handleClickAddNew}>Add User</Button>
                </div>
                <div>
                    <TableUser users={users} dataUpdate={dataUpdate} setDataUpdate={setDataUpdate} setShowModalUpdate={setShowModalUpdate} setShowModalDelete={setShowModalDelete} />
                </div>
                <ModalCreateUser fetchUsers={fetchUsers} showModalCreate={showModalCreate} onClose={() => setShowModalCreate(false)} />
                <ModalUpdateUser  fetchUsers={fetchUsers} showModalUpdate={showModalUpdate} dataUpdate={dataUpdate} onClose={() => setShowModalUpdate(false)} />
                <ModalDeleteUser fetchUsers={fetchUsers} showModalDelete={showModalDelete} dataUpdate={dataUpdate} onClose={() => setShowModalDelete(false)} />
            </div>
        </div>
    );
}
export default ManageUser;