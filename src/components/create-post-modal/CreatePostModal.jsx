import { useRef, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { closePostModal } from "../../features";
import {
  PrimaryButton,
  PrimaryOutlinedButton,
  DefaultProfilePic,
  Loader,
} from "../";

const CreatePostModal = () => {
  const dispatch = useDispatch();
  const handlePost = (event) => {
    event.preventDefault();
    dispatch(closePostModal());
  };

  const modalBoxRef = useRef(null);

  const textAreaRef = useRef(null);

  const {
    auth: {
      userDetails: { profileUrl, firstName, lastName },
    },
    user: { uploadingImg },
    post: { showPostModal },
  } = useSelector((state) => state);

  const focusHandler = () => {
    textAreaRef.current && textAreaRef.current.focus();
  };

  useEffect(() => {
    focusHandler();
  });

  useEffect(() => {
    const checkOusideClick = (e) => {
      if (
        modalBoxRef &&
        modalBoxRef.current &&
        !modalBoxRef.current.contains(e.target)
      ) {
        dispatch(closePostModal());
      }
    };
    document.addEventListener("mousedown", checkOusideClick);
    return () => {
      document.removeEventListener("mousedown", checkOusideClick);
    };
  }, [modalBoxRef, dispatch]);

  return (
    <div
      className={
        "fixed z-10 inset-0 h-screen w-screen bg-[rgba(0,0,0,0.5)] flex items-center justify-center " +
        (!showPostModal ? "hidden" : "")
      }
    >
      <div
        ref={modalBoxRef}
        className="relative px-2 sm:px-5 pt-10 pb-3 sm:py-8 border-lighter flex w-[90%] sm:w-[80%] max-w-[900px] bg-slate-100 dark:bg-slate-800 rounded-xl"
      >
        <MdClose
          className="absolute top-1 right-1 text-2xl cursor-pointer"
          onClick={() => dispatch(closePostModal())}
        />
        <div className="flex-none mt-3 h-12 w-12">
          {uploadingImg ? (
            <Loader />
          ) : profileUrl ? (
            <img
              src={profileUrl}
              className="flex-none w-12 h-12 rounded-full hidden sm:block"
            />
          ) : (
            <DefaultProfilePic>
              {firstName?.[0] + lastName?.[0]}
            </DefaultProfilePic>
          )}
        </div>
        <form className="w-full px-4 relative">
          <textarea
            ref={textAreaRef}
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
