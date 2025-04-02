
// useEffect()
// React Hook that tells React to DO THIS CODE WHEN:
// (pick one) 
// This component re-renders
// This component mounts
// The state of a value changes

// useEffect(function, [dependencies])

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

// useEffect(() => { ... })   
//  	On every render (mount & update)



// useEffect(() => { ... }, [])	 
//   Only on mount (runs once)


// useEffect(() => { ... }, [count])	
//    Only when count changes


// useEffect(() => { return () => { ... }; }, [])   
//       	When the component is removed


import React, {useState, useEffect} from "react";



function Example1() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      console.log("Component re-rendered!"); // Runs on every render
    });
  
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    );
  }


  
function Example2() {
    useEffect(() => {
      console.log("✅ Component Mounted!"); // Runs only once
    }, []);
  
    return <h1>Hello, World!</h1>;
  }


  function Example3() {
    const [count, setCount] = useState(0);
  
    useEffect(() => {
      console.log(`Count updated: ${count}`); // Runs only when `count` changes
    }, [count]);
  
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
    );
  }


  //example 4

  
function Message() {
    useEffect(() => {
      console.log("✅ Message Component Mounted!");
  
      return () => {
        console.log("❌ Message Component Unmounted!"); // Cleanup when unmounted
      };
    }, []);
  
    return <h1>Message Component</h1>;
  }
  
  function Example4() {
    const [show, setShow] = useState(true);
  
    return (
      <div>
        {show && <Message />} {/* Show/Hide Component */}
        <button onClick={() => setShow(!show)}>Toggle Message</button>
      </div>
    );
  }

  function MyComponent() {
    return (
      <div>
        <Example1 />
        <Example2 />
        <Example3 />
        <Example4 />
      </div>
    );
  }
  
  export default MyComponent;
  