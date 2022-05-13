import { Link } from "react-router-dom";
import { PrimaryButton, PrimaryOutlinedButton } from "../button";

const SigninCard = () => {
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col ">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full dark:bg-slate-900">
          <h1 className="mb-8 text-3xl text-center dark:text-white">Sign In</h1>

          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
          />

          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />

          <div className="text-center my-2">
            <label className="cursor-pointer dark:text-white flex gap-2 items-center justify-center">
              <input type="checkbox" name="termsAndConditions" />
              Remember Me
            </label>
          </div>

          <div className="flex flex-col gap-6 mt-5">
            <PrimaryButton>Sign in</PrimaryButton>
            <PrimaryOutlinedButton>
              Sign in with test credentials
            </PrimaryOutlinedButton>
          </div>
          <div className="text-center mt-5">
            <Link
              className="ml-2 hover:underline dark:text-white"
              to={"/signup"}
            >
              Create an account?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SigninCard };
