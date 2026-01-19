import { useEffect, useState } from "react";
import { deleteUser } from "../../../services/apiServices";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast as toasify } from "react-toastify";

function ModalDeleteUser({ showModalDelete, onClose, dataUpdate , fetchUsers }) {

    const handleClose = () => {
        onClose();
    }

    const [email, setEmail] = useState(dataUpdate.email || "");
    const [username, setUsername] = useState(dataUpdate.username || "");

    useEffect(() => {
        setEmail(dataUpdate.email || "");
        setUsername(dataUpdate.username || "");
    }, [dataUpdate]);

    const handleSaveUser = async () => {

        //call api create user
        let res = await deleteUser(dataUpdate.id);
        console.log("res create user: ", res);
        if (res && res.EC === 0) {
            toasify.success("Delete successfully!");
            handleClose();
            fetchUsers();
        }
        if (res && res.EC !== 0) {
            toasify.error("Delete user failed!");
        }
    }

    return (
        <>

            <Modal
                show={showModalDelete}
                onHide={handleClose}
                size="lg"
                centered
                dialogClassName="custom-modal-xl"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete user</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    Are you sure you want to delete user <strong>{username} ({email})</strong> ?
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSaveUser}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDeleteUser;