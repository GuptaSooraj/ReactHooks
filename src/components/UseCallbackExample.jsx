import React, { useCallback, useState } from "react";

const UseCallbackExample = () => {
  const [tasks, setTasks] = useState([]);

  const addTasks = useCallback(() => {
    setTasks((prevState) => [...prevState, "Some Task"]);
  }, [setTasks]);

  console.log(tasks);

  return (
    <div className="vh-100 justify-content-center align-items-center p-5 my-5 gray rounded">
      <h1> useCallBack Example </h1>
      <h4>
        Here we are using the useCallBack hook to Optimize Performance by
        Memoizing the Result of a Callback Function
        <br />
        {/* Here we utilize the `useCallback` hook to enhance performance.
        Specifically, we memoize the `addTasks` function, which avoids
        unnecessary re-renders when tasks are added to a list. The code
        maintains a list of tasks and optimizes the button component to add
        tasks efficiently. */}
      </h4>
      <p className="mb-5">
        Pretty much does the same things as the hook above but instead of
        Memoizing the Result of an Expensive Function Call it memoizes the
        result of a Callback Function, which is used to Optimize Event Handlers
        or Functions like `addTasks` in this example. This avoids unnecessary
        re-renders when adding tasks to the list, improving the overall
        performance of the component.
        <hr />
      </p>

      <Button addTasks={addTasks} />
      {tasks.map((task, index) => (
        <p key={index} className="mt-4">
          {task}
        </p>
      ))}
    </div>
  );
};

const Button = React.memo(({ addTasks }) => {
  console.log("Button Rendered");

  return (
    <>
      <button className="btn btn-primary" onClick={addTasks}>
        Add Tasks
      </button>
    </>
  );
});

export default UseCallbackExample;
