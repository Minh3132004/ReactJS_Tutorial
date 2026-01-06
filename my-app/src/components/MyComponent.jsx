import { useState } from "react";

function MyComponent() {
    const [state, setState] = useState({
        name: 'Minh',
        age: 22,
        address: 'Hanoi'
    });

    const handleClick = (event) => {
        console.log(event.target);
        setState({
            ...state, // spread operator to keep other state properties (sẽ giữ lại các thuộc tính state khác : name, address) 
            age: 30
        });
        console.log("My name is " + state.name + ", I'm " + state.age + " years old." + " I live in " + state.address);
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