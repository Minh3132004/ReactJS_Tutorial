function DisplayInfo(props) {
    return (
        <>
            <div>
                <h1>My name is {props.state.name}</h1>
                <p>My age is {props.state.age}</p>
                <p>I live in {props.state.address}</p>
            </div> 
        </>
    )
}

export default DisplayInfo;