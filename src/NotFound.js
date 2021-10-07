import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Sorry</h2>
      <p>That page can't be found</p>
      <Link to="/"> Back to home</Link>
    </div>
  );
};

export default NotFound;
