import React, { useContext } from "react";
import { AuthContext } from "../../FireBaseAuth/FirebaseAuth";
import { useNavigate } from "react-router";

function Signup() {
  const { Login } = useContext(AuthContext);
  const navigate = useNavigate();

  const HandleLogin = () => {
    Login().then(() => navigate("/Add-task"));
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-80 transition-all duration-300 hover:shadow-2xl">
        {/* Google Logo */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-1">
            <span className="block w-12 h-12 bg-blue-500 rounded-full"></span>
            <span className="block w-12 h-12 bg-red-500 rounded-full"></span>
            <span className="block w-12 h-12 bg-yellow-500 rounded-full"></span>
            <span className="block w-12 h-12 bg-green-500 rounded-full"></span>
          </div>
        </div>

        <button
          onClick={HandleLogin}
          className="w-full flex items-center justify-center space-x-3 py-3 px-6 border border-gray-300 rounded-xl 
      hover:bg-gray-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 
      focus:ring-blue-500"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          <span className="text-gray-700 font-medium">Sign in with Google</span>
        </button>

        <p className="mt-6 text-center text-sm text-gray-500">
          By continuing, you agree to TaskPro's
          <br />
          <a href="#" className="text-blue-600 hover:underline">
            Terms of Service
          </a>{" "}
          and
          <a href="#" className="text-blue-600 hover:underline">
            {" "}
            Privacy Policy
          </a>
        </p>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-500 text-sm">
          Continue to
          <span className="ml-1 text-blue-600 font-medium">TaskPro</span>
        </p>
        <div className="mt-2 flex items-center justify-center space-x-1">
          <span className="block h-2 w-2 bg-blue-500 rounded-full"></span>
          <span className="block h-2 w-2 bg-red-500 rounded-full"></span>
          <span className="block h-2 w-2 bg-yellow-500 rounded-full"></span>
          <span className="block h-2 w-2 bg-green-500 rounded-full"></span>
        </div>
      </div>
    </div>
  );
}

export default Signup;
