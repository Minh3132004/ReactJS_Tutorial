import Button from 'react-bootstrap/Button';
import ModalCreateUser from './ModalCreateUser';
import { useState } from 'react';

const ManageUser = (props) => {
    const [showModal , setShowModal] = useState(false);

    const handleClickAddNew = () => {
        setShowModal(true);
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
                    Table list users
                </div>
                <ModalCreateUser show={showModal} onClose={() => setShowModal(false)} />
            </div>
        </div>
    );
}
export default ManageUser;