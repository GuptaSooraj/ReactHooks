import useFetch from "./hooks/useFetch";

const CustomHookExample1 = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {}
  );

  if (loading) {
    return (
      <h3 className="vh-100 justify-content-center align-items-center p-5 my-5 gray rounded">
        Loading...
      </h3>
    );
  }

  return (
    <div className="vh-1000 justify-content-center align-items-center p-5 my-5 gray">
      <h1> Custom Hook 1 - useFetch </h1>
      <h4>
        Here we defines a custom `useFetch` hook for data fetching in React.
      </h4>
      <p className="mb-5">
        Here we Fetch 100 Post Titles from JSON Placeholder. It manages loading,
        errors, and data states, making data retrieval and error handling more
        efficient for components.
        <hr />
      </p>
      {data.map((post) => (
        <h3 key={post.id}> {post.title} </h3>
      ))}
    </div>
  );
};

export default CustomHookExample1;
