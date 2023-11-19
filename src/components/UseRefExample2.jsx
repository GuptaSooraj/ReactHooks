import { useEffect, useState, useRef } from "react";

const UseRefExample2 = () => {
  const [name, setName] = useState();

  const renders = useRef(1);
  const prevState = useRef("");

  useEffect(() => {
    renders.current = renders.current + 1;
    prevState.current = name;
  }, [name]);

  return (
    <div className="vh-100 justify-content-center align-items-center p-5 my-5 gray rounded">
      <h1 className="mb-4"> useRef Example 2 (Get Previous State) </h1>
      <h4 className="mb-4">
        Here we are using the useRef hook in React to access and track the
        previous state called Name in a functional component.
      </h4>
      <p>
        When you type something in the Text Box it Renders the Component and
        shows the number of times it is rendered and the Previous State
        <hr />
      </p>
      <h1>Renders: {renders.current}</h1>
      <h1>Prev Name State: {prevState.current}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control my-4"
      />
    </div>
  );
};

export default UseRefExample2;
