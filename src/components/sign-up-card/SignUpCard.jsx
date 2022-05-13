import { Link } from "react-router-dom";
import { PrimaryButton } from "../button";

const SignUpCard = () => {
  return (
    <div className="bg-grey-lighter min-h-screen flex flex-col ">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full dark:bg-slate-900">
          <h1 className="mb-8 text-3xl text-center dark:text-white">Sign up</h1>
          <input
            type="text"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="fullname"
            placeholder="Full Name"
          />

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
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="confirm_password"
            placeholder="Confirm Password"
          />

          <div className="text-center my-2">
            <label className="cursor-pointer dark:text-white flex gap-2 items-center justify-center">
              <input type="checkbox" name="termsAndConditions" />I agree to all
              terms &amp; conditions
            </label>
          </div>

          <div className="text-center mt-5">
            <PrimaryButton>Create Account</PrimaryButton>
          </div>
          <div className="text-center mt-5">
            <Link className="ml-2 hover:underline dark:text-white" to={"/"}>
              Sign In?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SignUpCard };
