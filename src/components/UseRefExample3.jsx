import { useState } from "react";
import Todo from "./Todo";

const UseRefExample3 = () => {
  const [showTodo, setShowTodo] = useState(true);

  return (
    <div className="vh-100 justify-content-center align-items-center p-5 my-5 gray rounded">
      <h1 className="mb-2"> useRef Example 3 (Memory Leak Error Fix) </h1>
      <h4>
        Here we are using the useRef hook to Resolve a Potential Memory Leak
        which could happen when unmounting a component that's making a fetch
        request.
      </h4>
      <p className="mb-4">
        When the App is loaded it Fetches a Todo from JSON Placeholder and it
        will take 3 seconds to Fetch cause it is setup that way then if you
        click the Toggle Todo Button it Unmounts the Todo Component and it
        creates an error which is solved using the useRef hook.
        <hr />
      </p>
      {showTodo && <Todo />}
      <button
        className="btn btn-primary"
        onClick={() => setShowTodo(!showTodo)}
      >
        Toggle Todo
      </button>
    </div>
  );
};

export default UseRefExample3;
