import { useState } from "react";
import axios from "axios";
import "./ModalCreateUser.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast as toasify } from "react-toastify";

function ModalCreateUser( { show, onClose } ) {

    const handleClose = () => {
        onClose();
    }

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("user");
    const [avatar, setAvatar] = useState("");
    const [previewImage, setPreviewImage] = useState("");

    const handleUploadImage = (event) => {
        if(event.target.files && event.target.files.length > 0) {
        setPreviewImage(URL.createObjectURL(event.target.files[0]));
        setAvatar(event.target.files[0]);
        }
    }

    const handleEmailChange = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleUsernameChange = (username) => {
        return username.length >= 3;
    }

    const handlePasswordChange = (password) => {
        return password.length >= 6;
    }


    const handleSaveUser = async () => {

        if(!handleEmailChange(email) || !handleUsernameChange(username) || !handlePasswordChange(password)) {
            if(!handleEmailChange(email)) {
                toasify.error("Invalid email format!");
            }
            if(!handleUsernameChange(username)) {
                toasify.error("Username must be at least 3 characters!");
            }
            if(!handlePasswordChange(password)) {
                toasify.error("Password must be at least 6 characters!");
            }
            return;
        }   

        
        const formData = new FormData();
        formData.append("email", email);
        formData.append("username", username);
        formData.append("password", password);
        formData.append("role", role);
        formData.append("userImage", avatar);

        //call api create user
        let res = await axios.post("http://localhost:8081/api/v1/participant", formData)
        if(res && res.data.EC === 0) {
            toasify.success("Create new user successfully!");
            handleClose();
        } else {
            toasify.error("Create new user failed!");
        }
    }

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Add new user
            </Button> */}

            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                centered
                dialogClassName="custom-modal-xl"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Create new user</Modal.Title>
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
                            <label htmlFor="inputPassword4" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                className="form-control"
                                id="inputPassword4"
                                placeholder="********"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
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
                                        src={previewImage || "https://shorthand.com/the-craft/types-of-image-file-formats/assets/UPhtO6IIvn/sh-unsplash_4qgbmezb56c-4096x2731.jpeg"}
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

export default ModalCreateUser;
