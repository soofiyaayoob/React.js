

function UserGreeting(props) {
    if (props.isLogged) {  
        return <h1 className="welcome-message">Welcome {props.username}</h1>;
    }
    return <h1 className="login-prompt">Please log in</h1>;  
}

export default UserGreeting;
