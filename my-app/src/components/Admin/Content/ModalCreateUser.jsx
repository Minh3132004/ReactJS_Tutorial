import { useState } from "react";
import "./ModalCreateUser.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalCreateUser() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add new user
            </Button>

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
                    <Button variant="primary" onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCreateUser;
