import { useState } from "react";
import DisplayInfo from "./DisplayInfo";
import AddUserInfo from "./AddUserInfo";

function MyComponent() {

    const [listUser , setListUser] = useState([
        { id: 1 , name: "Alice", age: 30, address: "123 Main St" },
        { id: 2, name: "Bob", age: 25, address: "456 Oak Ave" },
        { id: 3, name: "Charlie", age: 35, address: "789 Pine Rd" }
    ]);

    const handleAddUser = (user) => {
        setListUser([user ,...listUser]);
    }

    const handleDeleteUser = (userId) => {
        const updatedListUser = listUser.filter((user) => {return user.id !== userId});
        setListUser(updatedListUser);
    }

    return (
        <div>
            <AddUserInfo handleAddUser={handleAddUser} />
            <DisplayInfo listUser={listUser} handleDeleteUser={handleDeleteUser} />
        </div>
    );
}
export default MyComponent;