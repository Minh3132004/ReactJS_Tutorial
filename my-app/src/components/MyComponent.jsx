import { useState } from "react";
import DisplayInfo from "./DisplayInfo";

function MyComponent() {

    const [listUser , setListUser] = useState([
        { id: 1 , name: "Alice", age: 30, address: "123 Main St" },
        { id: 2, name: "Bob", age: 25, address: "456 Oak Ave" },
        { id: 3, name: "Charlie", age: 35, address: "789 Pine Rd" }
    ]);

    return (
        <div>
            <DisplayInfo listUser={listUser} />
        </div>
    );
}
export default MyComponent;