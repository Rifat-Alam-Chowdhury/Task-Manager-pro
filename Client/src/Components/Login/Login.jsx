import React, { useContext } from "react";
import { AuthContext } from "../../FireBaseAuth/FirebaseAuth";
import { useNavigate } from "react-router";

function Login() {
  const { Login } = useContext(AuthContext);
  const navigate = useNavigate();
  const HandleLogin = () => {
    Login().then(() => navigate("/Add-task"));
  };
  return (
    <div className="flex justify-center items-center text-4xl my-auto border-2 border-red-700 min-h-screen">
      <button onClick={HandleLogin} className="btn btn-secondary">
        Google login
      </button>
    </div>
  );
}

export default Login;
