import { useState } from "react";

function MyComponent() {
    const [state, setState] = useState({
        name: 'Minh',
        age: 22
    });

    return (
        <div>
            {state.name}, {state.age}-
            This is MyComponent
        </div>
    );
}
export default MyComponent;