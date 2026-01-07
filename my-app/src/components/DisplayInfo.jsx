import { useState } from "react";
import './DisplayInfo.scss';
import logo from '../assets/react.svg';

function DisplayInfo(props) {
    const [activeBtn, setActiveBtn] = useState(false);

    const handleClickBtn = () => {
        setActiveBtn(!activeBtn);
    }

    const handleDeleteUser = (userId) => {
        props.handleDeleteUser(userId);
    }


    return (
        <div className="display-info-container">
            <img src={logo} alt="React Logo" />
            {!activeBtn && <button onClick={handleClickBtn}>Show Info</button>}
            {activeBtn && <button onClick={handleClickBtn}>Hide Info</button>}

            {activeBtn && props.listUser.map((user) => {
                console.log(">>> check user: ", user);

                // if (user.age > 25) {
                //     return (
                //         <div key={user.id}>
                //             <h1>User Info</h1>
                //             <h3>Name: {user.name}</h3>
                //             <p style={{ color: 'red' }}>Age: {user.age}</p>
                //             <p>Address: {user.address}</p>
                //             <hr />
                //         </div>
                //     );
                // }
                // else {
                //     return (
                //         <div key={user.id}>
                //             <h1>User Info</h1>
                //             <h3>Name: {user.name}</h3>
                //             <p>Age: {user.age}</p>
                //             <p>Address: {user.address}</p>
                //             <hr />
                //         </div>
                //     );
                // }

                return (
                    <div key={user.id}>
                        <h1 className="user-info-title">User Info</h1>
                        <h3>Name: {user.name}</h3>
                        <p style={{ paddingTop : '50px', color: user.age > 25 ? 'red' : 'green' }}>Age: {user.age}</p>
                        <p>Address: {user.address}</p>
                        <button onClick = {() => handleDeleteUser(user.id)}>X</button>
                        <hr />
                    </div>
                );
            })}
        </div>
    )
}

export default DisplayInfo;