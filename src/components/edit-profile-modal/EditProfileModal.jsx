import { FiCamera } from "react-icons/fi";
import { PrimaryButton, PrimaryOutlinedButton } from "../";

const EditProfileModal = ({ toggleEditProfile }) => {
  return (
    <div
      className={
        "fixed z-10 inset-0 h-screen w-screen bg-[rgba(0,0,0,0.5)] flex items-center justify-center " +
        (!true ? "hidden" : "")
      }
    >
      <div className="bg-grey-lighter min-h-screen flex flex-col ">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full dark:bg-slate-900">
            <h1 className="mb-8 text-2xl text-center dark:text-white">
              Edit Profile
            </h1>

            <div className="relative w-24 h-24 m-auto">
              <img
                className="rounded-full m-auto"
                src="https://randomuser.me/api/portraits/men/11.jpg"
                alt="user image"
              />
              <div className="absolute right-0 bottom-0 flex justify-center items-center h-9 w-9 bg-black  text-white dark:bg-white dark:text-black rounded-full">
                <FiCamera className="text-xl cursor-pointer" />
              </div>
            </div>

            <div className="text-black dark:text-white my-4">
              <h4 className="text-xl">User Name</h4>
              <h6>@johndoe</h6>
            </div>

            <div className="text-black dark:text-white my-4">
              <h4 className="text-xl">Name</h4>
              <h6>John Doe</h6>
            </div>

            <label>
              <p className="text-black dark:text-white">Bio</p>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="bio"
                placeholder="Bio"
              />
            </label>

            <label>
              <p className="text-black dark:text-white">Website</p>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="website"
                placeholder="Website"
              />
            </label>

            <div className="flex justify-between gap-6 mt-5">
              <PrimaryOutlinedButton clickHandler={toggleEditProfile}>
                Cancel
              </PrimaryOutlinedButton>
              <PrimaryButton clickHandler={toggleEditProfile}>
                Update
              </PrimaryButton>
            </div>
            <div className="text-center mt-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { EditProfileModal };
