import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../FireBaseAuth/FirebaseAuth";

function Navbar() {
  const { currentUser, logout, loading } = useContext(AuthContext);

  return (
    <div className="flex justify-between border-2">
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/Add-task"}>Add Task</Link>
      </li>
      {loading ? (
        <progress className="progress w-56"></progress>
      ) : currentUser ? (
        <li>
          <button onClick={logout}>Logout</button>
        </li>
      ) : (
        <>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/signup"}>Signup</Link>
          </li>
        </>
      )}
    </div>
  );
}

export default Navbar;
