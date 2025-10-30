import React, { useState } from "react";
import DynamicHeropage from "../components/DynamicHeropage/DynamicHeropage";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");

  return (
    <>
      <DynamicHeropage />

      {/* Glass Form */}
      <div className="flex justify-center items-center mt-[-120px] sm:mt-[-150px] min-h-[70vh] px-4">
        <form className="flex flex-col items-center w-[90%] sm:max-w-md m-auto bg-white/20 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl py-10 px-8 sm:px-10 gap-5 text-white transition-all duration-700">
          {/* Heading */}
          <div className="inline-flex items-center gap-2 mb-4">
            <p className="text-3xl text-violet-700 font-semibold drop-shadow-md tracking-wide">
              {currentState}
            </p>
            <hr className="border-none h-[1.5px] w-10 bg-violet-700/70" />
          </div>

          {/* Input Fields */}
          {currentState === "Signup" && (
            <input
              type="text"
              required
              className="w-full px-4 py-2.5 bg-white/20   text-violet-700 placeholder-gray-700 border-b-1 border-gray-950 focus:ring-2 focus:ring-violet-500"
              placeholder="Name"
            />
          )}

          <input
            type="email"
            required
            className="w-full px-4 py-2.5 bg-white/20   text-white placeholder-gray-700 border-b-1 border-gray-950 focus:ring-2 focus:ring-violet-500"
            placeholder="Email"
          />
          <input
            type="password"
            required
            className="w-full px-4 py-2.5 bg-white/20   text-white placeholder-gray-700 border-b-1 border-gray-950 focus:ring-2 focus:ring-violet-500"
            placeholder="Password"
          />

          {/* Forgot + Toggle */}
          <div className="w-full flex justify-between text-sm mt-1">
            <p className="cursor-pointer text-violet-300 hover:text-violet-100 transition">
              Forgot password?
            </p>
            {currentState === "Login" ? (
              <p
                className="cursor-pointer text-violet-400 hover:text-violet-200 transition"
                onClick={() => setCurrentState("Signup")}
              >
                Don’t have an account?
                <span className="text-violet-700 font-medium ml-1">Signup</span>
              </p>
            ) : (
              <p
                className="cursor-pointer text-violet-400 hover:text-violet-200 transition"
                onClick={() => setCurrentState("Login")}
              >
                Already have an account?
                <span className="text-white font-medium ml-1">Login</span>
              </p>
            )}
          </div>

          {/* Button */}
          <button className="mt-4 w-full px-4 py-2.5 bg-violet-600 hover:bg-violet-700 rounded-lg font-semibold tracking-wide transition-all duration-300 shadow-md">
            {currentState === "Login" ? "Sign In" : "Sign Up"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
