import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../FireBaseAuth/FirebaseAuth";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Navbar() {
  const { currentUser, logout, loading } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Add Task", path: "/Add-task" },
  ];

  return (
    <nav className="fixed w-full top-0   bg-gradient-to-r from-yellow-600 to-red-500  ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-xl">
              TaskPro
            </Link>
          </div>

          {/* large */}
          <div className="hidden ml-45 md:block">
            <div className="ml-10 flex items-center space-x-4 ">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-red-600 shadow-md bg-white hover:bg-gray-100 transition-all
 px-3 py-2 rounded-md text-sm font-medium "
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* login */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {loading ? (
                <div
                  className="h-8 w-66 animate-pulse rounded-full bg-gradient-to-r from-yellow-700 to-red-600
"
                />
              ) : currentUser ? (
                <div className="flex items-center gap-4">
                  <span className="text-gray-200 text-sm font-extrabold">
                    {currentUser.email}
                  </span>
                  <button
                    onClick={logout}
                    className="text-red-600 shadow-md bg-white hover:bg-gray-100 transition-all
 px-3 py-2 rounded-md text-sm font-medium  flex items-center gap-1"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <Link
                    to="/login"
                    className="text-red-600 shadow-md bg-white hover:bg-gray-100 transition-all
 px-3 py-2 rounded-md text-sm font-medium "
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="text-red-600 shadow-md bg-white hover:bg-gray-100 transition-all
 px-3 py-2 rounded-md text-sm font-medium  flex items-center gap-1"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobiles*/}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gradient-to-r hover:from-yellow-700 hover:to-red-600 focus:outline-none transition-colors"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 transition-all duration-600  ">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-100 hover:bg-gradient-to-r hover:from-yellow-700 hover:to-red-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {!loading && (
              <div className="border-t border-white/20 pt-2">
                {currentUser ? (
                  <>
                    <div className="px-3 py-2 text-gray-200 text-sm">
                      Logged in as: {currentUser.email}
                    </div>
                    <button
                      onClick={() => {
                        logout();
                        setIsMenuOpen(false);
                      }}
                      className="w-full text-left text-gray-100 hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-gray-100 hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="text-gray-100 hover:bg-blue-700 block px-3 py-2 rounded-md text-base font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
