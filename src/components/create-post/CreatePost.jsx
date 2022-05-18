import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { PrimaryButton, DefaultProfilePic, Loader } from "../";
import { createPost } from "../../features";

const CreatePost = () => {
  const {
    auth: {
      userDetails: { profileUrl, firstName, lastName },
      token,
    },
    user: { uploadingImg },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [postInput, setPostInput] = useState("");

  const handlePost = (event) => {
    event.preventDefault();
    if (postInput?.trim().length > 0) {
      dispatch(createPost({ postData: { content: postInput }, token }));
      setPostInput("");
    } else {
      toast.error("Post cannot be empty");
    }
  };
  return (
    <div className="px-5 py-3 border-lighter flex">
      <div className="flex-none mt-3 w-12 h-12 text-lg">
        {uploadingImg ? (
          <Loader />
        ) : profileUrl ? (
          <img src={profileUrl} className="flex-none w-12 h-12 rounded-full" />
        ) : (
          <DefaultProfilePic>{firstName[0] + lastName[0]}</DefaultProfilePic>
        )}
      </div>
      <form className="w-full px-4 relative">
        <textarea
          placeholder="Write something interesting"
          className="resize-none mt-3 pb-3 w-full h-28 bg-slate-200 focus:outline-none rounded-xl p-2 dark:bg-slate-700"
          value={postInput}
          onChange={(e) => setPostInput(e.target.value)}
        />
        <div className="flex justify-end">
          <PrimaryButton clickHandler={handlePost}>Post</PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export { CreatePost };
