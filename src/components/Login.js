import { useRef, useState } from "react";
import Header from "./Header";
import { ValidateFormData } from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleClick = () => {
    const message = ValidateFormData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
  };

  const handleIsSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_large.jpg"
          alt="Background_image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 my-36 mx-auto bg-black bg-opacity-75 left-0 right-0 text-white"
      >
        <h1 className="text-white font-bold text-3xl mb-2 p-2">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Username"
            className="m-2 p-4 w-full rounded-md bg-black bg-opacity-50 border border-white "
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="m-2 mb-4 p-4 w-full rounded-md bg-black bg-opacity-50 border border-white "
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="mx-2 p-4 w-full rounded-md bg-black bg-opacity-50 border border-white "
        />
        <p className="p-2 text-red-700 font-bold">{errorMessage}</p>
        <button
          className="m-2 mt-4 p-2 bg-red-600  font-medium w-full rounded-md hover:bg-red-700"
          onClick={handleClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2 cursor-pointer" onClick={handleIsSignIn}>
          {isSignIn
            ? "New to Netflix? Sign up now."
            : "Already a user? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
