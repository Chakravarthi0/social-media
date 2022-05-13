import React from "react";
import { MdClose } from "react-icons/md";
import { usePostModal } from "../../hooks";
import { PrimaryButton, PrimaryOutlinedButton } from "../button";

const CreatePostModal = () => {
  const { toggleShowPostModal, showPostModal } = usePostModal();
  const handlePost = (event) => {
    event.preventDefault();
    toggleShowPostModal();
  };
  return (
    <div
      className={
        "fixed z-10 inset-0 h-screen w-screen bg-[rgba(0,0,0,0.5)] flex items-center justify-center " +
        (!showPostModal ? "hidden" : "")
      }
    >
      <div className="relative px-2 sm:px-5 pt-10 pb-3 sm:py-8 border-lighter flex w-[90%] sm:w-[80%] max-w-[900px] bg-slate-100 dark:bg-slate-800 rounded-xl">
        <MdClose
          className="absolute top-1 right-1 text-2xl cursor-pointer"
          onClick={toggleShowPostModal}
        />
        <div className="flex-none mt-3">
          <img
            src="https://randomuser.me/api/portraits/men/11.jpg"
            className="flex-none w-12 h-12 rounded-full hidden sm:block"
          />
        </div>
        <form className="w-full px-4 relative">
          <textarea
            placeholder="Write something interesting"
            className="resize-none mt-3 pb-3 w-full h-28 bg-slate-200 focus:outline-none rounded-xl p-2 dark:bg-slate-700"
          />
          <div className="flex gap-5 justify-end mt-2">
            <PrimaryOutlinedButton clickHandler={handlePost}>
              Cancel
            </PrimaryOutlinedButton>
            <PrimaryButton clickHandler={handlePost}>Post</PrimaryButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export { CreatePostModal };
