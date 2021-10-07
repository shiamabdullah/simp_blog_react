import React from "react";

const Home = () => {
  const handleClick = (e) => {
    console.log("hello ninjas", e);
  };

  const handleClickAgain = (name, e) => {
    console.log("hello " + name + e.target);
    console.log(e);
  };
  return (
    <div className="home">
      <h2>HomePage</h2>
      <button onClick={handleClick}> Click Me</button>
      <button
        onClick={(e) => {
          handleClickAgain("mario", e);
        }}
      >
        Click Me Again
      </button>
    </div>
  );
};

export default Home;
