import { useRef } from "react";

function UseRefExample1() {
  const inputRef = useRef();
  const pRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    // alert ("132");
    // inputRef.current (will have to use current with every useRef to access values)
    // console.log(inputRef.current.value);
    // alert(inputRef.current.value);
    inputRef.current.value = "hello world";
    inputRef.current.style.backgroundColor = "Red";
    pRef.current.innerText = "Goodbye";
  };

  return (
    <div className="vh-100 justify-content-center align-items-center p-5 my-5 gray rounded">
      <h1 className="mb-4"> useRef Example 1 (Create DOM Reference) </h1>
      <h4>Here we use the useRef hook to Refer to a DOM Element</h4>
      <p className="mb-5">
        Here we are using the useRef hook to Change Elements Input Value,
        Background Color, and the P Element's InnerText when the Form Component
        is submitted.
        <hr />
      </p>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          ref={inputRef}
          id="name"
          className="form-control my-4"
        />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
        <p onClick={() => inputRef.current.focus()} ref={pRef} className="mt-5">
          Click Paragraph to Focus Text Box
        </p>
      </form>
    </div>
  );
}

export default UseRefExample1;
