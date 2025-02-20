import React from "react";
import { Link } from "react-router";

function Hero() {
  return (
    <div className=" bg-gradient-to-r from-yellow-600 to-red-500 pb-32 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-24 text-center lg:pt-40">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Organize Your Work, Master Your Time
          </h1>
          <p className="mt-4 text-xl text-yellow-100">
            The ultimate task management solution for teams and individuals
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              to="/Add-task"
              className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-lg font-medium text-red-600 shadow-lg hover:bg-gray-100 transition-all"
            >
              Get Started Free
            </Link>
            <Link
              to="/Add-task"
              className="flex items-center gap-2 rounded-lg border-2 border-white px-6 py-3 text-lg font-medium text-white hover:bg-white/10 transition-all"
            >
              Demo Preview
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
