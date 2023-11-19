// import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

const CustomHookExample2 = () => {
  // const [task, setTask] = useState("");
  const [task, setTask] = useLocalStorage("task", "");
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const onSubmit = (e) => {
    e.preventDefault();

    const taskObject = {
      // task: task,
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    };

    setTasks([...tasks, taskObject]);
  };

  return (
    <div className="vh-100 justify-content-center align-items-center p-5 my-5 gray rounded">
      <h1>Custom Hook 2 - useLocalStorage</h1>
      <h4>
        Here we defines a custom `useLocalStorage` hook which is used to Set
        Browser's Local Storage instead of setting the State of a component with
        useState hook
      </h4>
      <p className="mb-5">
        When you type something in Input Box it is added to Browser's Local
        Storage as String and when Submit it then it is converted into an Array
        and it show on screen what is getting stored in the Browser's Local
        Storage
        <hr />
      </p>
      <form onSubmit={onSubmit} className="w-50">
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Task
          </label>
          <input
            type="text"
            className="form-control my-4"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {tasks.map((task, index) => (
        <h3 key={index} className="mt-4">
          {task.task}
        </h3>
      ))}
    </div>
  );
};

export default CustomHookExample2;
