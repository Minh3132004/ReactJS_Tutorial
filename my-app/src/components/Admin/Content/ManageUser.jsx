import Button from 'react-bootstrap/Button';
import ModalCreateUser from './ModalCreateUser';
import { useEffect, useState } from "react";
import { getAllUsers, getUsersWithPaginate } from '../../../services/apiServices';
import ModalUpdateUser from './ModalUpdateUser';
import ModalDeleteUser from './ModalDeleteUser';
import TableUserPaginate from './TableUserPaginate';

const ManageUser = (props) => {
    const [showModalCreate, setShowModalCreate] = useState(false);
    const [showModalUpdate, setShowModalUpdate] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [dataUpdate, setDataUpdate] = useState({});

    const LIMIT_USER_PER_PAGE = 1;
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

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

    const fetchUsersWithPaginate = async (page) => {
        try {
            let res = await getUsersWithPaginate(page, LIMIT_USER_PER_PAGE);
            if (res && res.EC === 0) {
                console.log("Fetch users with paginate: ", res.DT.users);
                setUsers(res.DT.users);
                setPageCount(res.DT.totalPages);
            }
        }
        catch (error) {
            console.log("Error fetching users: ", error);
        }
    }


    useEffect(() => {
         fetchUsersWithPaginate(1);
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
                    <TableUserPaginate fetchUsersWithPaginate={fetchUsersWithPaginate} currentPage={currentPage} setCurrentPage={setCurrentPage} pageCount={pageCount} users={users} dataUpdate={dataUpdate} setDataUpdate={setDataUpdate} setShowModalUpdate={setShowModalUpdate} setShowModalDelete={setShowModalDelete} />
                </div>
                <ModalCreateUser fetchUsersWithPaginate={fetchUsersWithPaginate} currentPage={currentPage} setCurrentPage={setCurrentPage} fetchUsers={fetchUsers} showModalCreate={showModalCreate} onClose={() => setShowModalCreate(false)} />
                <ModalUpdateUser fetchUsersWithPaginate={fetchUsersWithPaginate} currentPage={currentPage} setCurrentPage={setCurrentPage} fetchUsers={fetchUsers} showModalUpdate={showModalUpdate} dataUpdate={dataUpdate} onClose={() => setShowModalUpdate(false)} />
                <ModalDeleteUser fetchUsersWithPaginate={fetchUsersWithPaginate} currentPage={currentPage} setCurrentPage={setCurrentPage} fetchUsers={fetchUsers} showModalDelete={showModalDelete} dataUpdate={dataUpdate} onClose={() => setShowModalDelete(false)} />
            </div>
        </div>
    );
}
export default ManageUser;