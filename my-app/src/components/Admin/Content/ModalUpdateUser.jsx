import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast as toasify } from "react-toastify";
import { updateUser } from "../../../services/apiServices";

function ModalUpdateUser({ showModalUpdate, onClose, dataUpdate  , fetchUsers }) {

    const handleClose = () => {
        onClose();
    }

    const [email, setEmail] = useState(dataUpdate.email || "");
    const [username, setUsername] = useState(dataUpdate.username || "");
    const [role, setRole] = useState(dataUpdate.role || "user");
    const [image, setImage] = useState(dataUpdate.image || "");

    useEffect(() => {
        setEmail(dataUpdate.email || "");
        setUsername(dataUpdate.username || "");
        setRole(dataUpdate.role || "user");
        setImage(dataUpdate.image || "");
    }, [dataUpdate]);

    const handleUploadImage = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            setImage(event.target.files[0]);
        }
    }

    const handleEmailChange = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleUsernameChange = (username) => {
        return username.length >= 3;
    }


    const handleSaveUser = async () => {

        if (!handleEmailChange(email) || !handleUsernameChange(username)) {
            if (!handleEmailChange(email)) {
                toasify.error("Invalid email format!");
            }
            if (!handleUsernameChange(username)) {
                toasify.error("Username must be at least 3 characters!");
            }
            return;
        }

        //call api create user
        let res = await updateUser(dataUpdate.id, email , username, dataUpdate.password, role, image);
        console.log("res create user: ", res);
        if (res && res.EC === 0) {
            toasify.success("Update user successfully!");
            handleClose();
            fetchUsers();
        }
        if (res && res.EC !== 0) {
            toasify.error("Update user failed!");
        }
    }

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Add new user
            </Button> */}

            <Modal
                show={showModalUpdate}
                onHide={handleClose}
                size="lg"
                centered
                dialogClassName="custom-modal-xl"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update user</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="inputEmail4" className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="inputEmail4"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="inputUserName" className="form-label">
                                Username
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputUserName"
                                placeholder="minhtran"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="inputImage" className="form-label">
                                Avatar
                            </label>
                            <input type="file" className="form-control" id="inputImage" onChange={handleUploadImage} />
                        </div>

                        <div className="col-md-12">
                            <div className="img-preview">
                                <span className="img-preview__label">Preview image</span>
                                <div className="img-preview__frame">
                                    <img 
                                        src={
                                            image
                                                ? typeof image === "string"
                                                    ? `data:image/jpeg;base64,${image}`
                                                    : URL.createObjectURL(image)
                                                : ""
                                        }
                                        alt="Image preview" 
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <label htmlFor="inputRole" className="form-label">
                                Role
                            </label>
                            <select id="inputRole" className="form-select" value={role} onChange={(event) => setRole(event.target.value)}>
                                <option value="">Choose role</option>
                                <option value="admin">Admin</option>
                                <option defaultValue="user">User</option>
                            </select>
                        </div>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSaveUser}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalUpdateUser;
