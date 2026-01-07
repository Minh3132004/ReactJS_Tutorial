import { useState } from "react";

function AddUserInfo(props) {

    const [name , setName] = useState("");
    const [age , setAge] = useState("");
    const [address , setAddress] = useState("");

    const handleClickAddUser = (event) => {
        event.preventDefault();
        const user = { name, age, address };
        props.handleAddUser(user);
    }

    const handleAddName = (event) => {
        setName(event.target.value);
    }

    const handleAddAge = (event) => {
        setAge(event.target.value);
    }

    const handleAddAddress = (event) => {
        setAddress(event.target.value);
    }   

    return (
        <>
            <h3>Add User Info</h3>
            <form onSubmit={handleClickAddUser}>
                <label htmlFor="name">Name :</label>
                <input type="text" id="name" name="name" onChange={handleAddName} /><br /><br />
                <label htmlFor="age">Age :</label>
                <input type="text" id="age" name="age" onChange={handleAddAge} /><br /><br />
                <label htmlFor="address">Address :</label>
                <input type="text" id="address" name="address" onChange={handleAddAddress} /><br /><br />
                <button>Add User</button>
            </form>
            <hr />
        </>
    );
}

export default AddUserInfo;