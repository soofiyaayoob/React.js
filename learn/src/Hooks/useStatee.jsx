import React,{useState} from "react";


function Component() {
    const [name, setName] = useState("quest");

    function updateName() {
        setName("Soofiya"); 
    }

    return ( 
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Update Name</button> 
        </div>
    );
}

export default Component;