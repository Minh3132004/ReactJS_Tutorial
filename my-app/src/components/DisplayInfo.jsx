import { useState } from "react";

function DisplayInfo(props) {
    const [activeBtn, setActiveBtn] = useState(false);

    const handleClickBtn = () => {
        setActiveBtn(!activeBtn);
    }


    return (
        <>
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
                        <h1>User Info</h1>
                        <h3>Name: {user.name}</h3>
                        <p style={user.age > 25 ? { color: 'red' } : { color: 'green' }}>Age: {user.age}</p>
                        <p>Address: {user.address}</p>
                        <hr />
                    </div>
                );
            })}
        </>
    )
}

export default DisplayInfo;