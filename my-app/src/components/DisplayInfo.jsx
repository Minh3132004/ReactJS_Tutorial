function DisplayInfo(props) {
    return (
        <>
            {props.listUser.map((user) => {
                return (
                <div key={user.id}>
                    <h1>User Info</h1>
                    <h3>Name: {user.name}</h3>
                    <p>Age: {user.age}</p>
                    <p>Address: {user.address}</p>
                    <hr />
                </div>
                );
            })}
        </>
    )
}

export default DisplayInfo;