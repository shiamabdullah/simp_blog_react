import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Shiamify</h1>
      <div className="links">
        <a href="/"> Home</a>
        <a
          href="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          Create
        </a>
      </div>
    </div>
  );
};

export default Navbar;
