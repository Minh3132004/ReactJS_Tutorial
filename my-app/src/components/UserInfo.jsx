import { useState } from "react";

function UserInfo(props) {
    const [nameTemp, setNameTemp] = useState(props.state.name);
    const [ageTemp, setAgeTemp] = useState(props.state.age);


    const handleChangeName = (event) => {
        setNameTemp(event.target.value);
    }

    const handleChangeAge = (event) => {
        setAgeTemp(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        props.setState({
            ...props.state,
            name: nameTemp,
            age: ageTemp
        });
    }

    return (
        <>
            <div>
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
