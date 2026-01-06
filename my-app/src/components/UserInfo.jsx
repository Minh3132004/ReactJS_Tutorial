import { useState } from "react";

function UserInfo() {
    const [state, setState] = useState({
        name: 'Minh',
        age: 22,
        address: 'Hanoi'
    });
    const [nameTemp, setNameTemp] = useState(state.name);
    const [ageTemp, setAgeTemp] = useState(state.age);


    const handleChangeName = (event) => {
        setNameTemp(event.target.value);
    }

    const handleChangeAge = (event) => {
        setAgeTemp(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        setState({
            ...state,
            name: nameTemp,
            age: ageTemp
        });
    }

    return (
        <>
            <div>
                <h1>My name is {state.name}</h1>
                <h2>I am {state.age} years old</h2>
                <h3>I live in {state.address}</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input value={nameTemp} type="text" onChange={handleChangeName} />
                    <br />
                    <label htmlFor="age">Age:</label>
                    <input value={ageTemp} type="text" onChange={handleChangeAge} />
                    <hr />
                    <button>Update Age</button>
                </form>
            </div>
            <p>I am a child</p>
        </>
    );
}
export default UserInfo;
