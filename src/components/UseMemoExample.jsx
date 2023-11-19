import { useEffect, useState, useRef, useMemo } from "react";

const UseMemoExample = () => {
  const [number, setNumber] = useState(1);
  const [increment, setIncrement] = useState(0);

  const renders = useRef(1);

  // const sqrt = getSqrt(number);
  const sqrt = useMemo(() => getSqrt(number), [number]);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  const onClick = () => {
    setIncrement((prevState) => {
      console.log(prevState + 1);
      return prevState + 1;
    });
    setIncrement(() => {
      console.log(increment + 1);
      return increment + 1;
    });
  };

  return (
    <div className="vh-100 justify-content-center align-items-center p-5 my-5 gray rounded">
      <h1> useMemo Example </h1>
      <h4>
        Here we are using the useMemo hook to Optimize Performance by Memoizing
        the Result of an Expensive Function Call
        <br />
        {/* This React code demonstrates the use of the `useMemo` hook to memoize
        the result of an expensive function (`getSqrt`) to calculate and display
        the square root of a number, optimizing performance when the number
        changes. It also tracks the number of component renders and an increment
        value. */}
      </h4>
      <p className="mb-5">
        Here I have defined Two States in React called Number & Increment and
        when any of the states change, it can potentially trigger a re-render of
        the component and If we have an Expensive Function Call which is Running
        Every Time when the State gets Updated it will cause the Website to get
        slow. So using the useMemo hook it Memoizes the Result of an Expensive
        Function Call and doesn't Rerenders all of the App
        <br />
        To replicate and Expensive Function Call when the Number is updated in
        the Text Box it logs number upto 10000 in Console
        <hr />
      </p>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
        className="form-control w-25"
      />

      <h2 className="mt-4">
        The Square Root of {number} is {sqrt}
      </h2>

      <button onClick={onClick} className="btn btn-primary my-4">
        Re Render
      </button>

      <h3>Renders: {renders.current}</h3>
      <h3> Increment Value {increment} </h3>
    </div>
  );
};

function getSqrt(n) {
  for (let i = 0; i < 10000; i++) {
    console.log(i);
  }
  console.log("Expensive Function Called");
  return Math.sqrt(n);
}

export default UseMemoExample;
