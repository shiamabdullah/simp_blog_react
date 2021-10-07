import react from "react";
import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("mario");
  const [age, setAge] = useState("23");

  const handleClick = (e) => {
    console.log("hello ninjas", e);
    setName("Shiam");
    setAge("22");
  };

  return (
    <div className="home">
      <h2>HomePage</h2>
      <p>{name + " is " + age + " years old"}</p>
      <button onClick={handleClick}> Click Me</button>
    </div>
  );
};

export default Home;
