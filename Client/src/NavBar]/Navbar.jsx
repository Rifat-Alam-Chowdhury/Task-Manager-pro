import React from "react";
import { Link } from "react-router";

function Navbar() {
  return (
    <div className="flex justify-between border-2">
      <li>
        <Link to={"/"}>Home</Link>
      </li>{" "}
      <li>
        <Link to={"/login"}>Login</Link>
      </li>
      <li>
        <Link to={"/signup"}>signup</Link>
      </li>
    </div>
  );
}

export default Navbar;
