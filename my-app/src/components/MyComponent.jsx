import { useState } from "react";

function MyComponent() {
    const [ageTemp , setAgeTemp] = useState();
    const [state, setState] = useState({
        name: 'Minh',
        age: 22,
        address: 'Hanoi'
    });

    const handleChange = (event) => {
        setAgeTemp(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        setState({
            ...state ,
            age: ageTemp
        });
    }

    return (
        <div>
            <h1>My name is {state.name}</h1>
            <h2>I am {state.age} years old</h2>
            <h3>I live in {state.address}</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="age">Age:</label>
                <input type="text" onChange={handleChange}/>
                <p>Your age is: {ageTemp}</p>
                <button>Update Age</button>
            </form>
        </div>
    );
}
export default MyComponent;