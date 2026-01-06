import { useState } from "react";
import DisplayInfo from "./DisplayInfo";
import UserInfo from "./UserInfo";

function MyComponent() {

    const [state, setState] = useState({
        name: 'Minh',
        age: 22,
        address: 'Hanoi'
    });

    return (
        <div>
            <UserInfo state={state} setState={setState} />
            <DisplayInfo state={state} />
        </div>
    );
}
export default MyComponent;