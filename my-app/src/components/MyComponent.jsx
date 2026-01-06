import { useState } from "react";

function MyComponent() {
    const [state, setState] = useState({
        name: 'Minh',
        age: 22
    });

    const handleClick = (event) => {
        console.log(event.target);
        console.log("My name is " + state.name + ", I'm " + state.age + " years old.");
    };

    return (
        <div>
            {state.name}, {state.age}-
            This is MyComponent
            <button onClick={handleClick} >Click me</button>
        </div>
    );
}
export default MyComponent;