import Button from 'react-bootstrap/Button';
import ModalCreateUser from './ModalCreateUser';

const ManageUser = (props) => {
    return (
        <div className="manage-user-container">
            <div className="title">

            </div>
            <div className="users-content">
                <div>
                    <Button>Add User</Button>
                </div>
                <div>
                    Table list users
                    <ModalCreateUser />
                </div>
            </div>
        </div>
    );
}
export default ManageUser;