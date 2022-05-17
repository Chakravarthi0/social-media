import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { BsPencil, BsTrash } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { openPostModal } from "../../features";
import { useDetectClick } from "../../hooks";

const Post = () => {
  const [showPostOptions, setShowPostOptions] = useState(false);
  const optionsModalRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleShowOptions = () => {
    setShowPostOptions((prev) => !prev);
  };
  useDetectClick(optionsModalRef, setShowPostOptions);
  return (
    <div className="relative flex gap-x-5 my-3 rounded-xl p-5 hover:bg-slate-200 dark:hover:bg-slate-700">
      <div
        className="absolute top-0 right-0 cursor-pointer text-2xl"
        onClick={() => toggleShowOptions()}
      >
        <MdOutlineMoreHoriz />
      </div>
      {showPostOptions && (
        <div
          ref={optionsModalRef}
          className="absolute top-4 right-0 p-2 rounded-lg cursor-pointer bg-slate-200 dark:bg-black"
        >
          <div
            className="flex gap-2 justify-center items-center hover:text-blue-500"
            onClick={() => {
              dispatch(openPostModal());
            }}
          >
            <BsPencil />
            <p>Edit Post</p>
          </div>
          <div
            className="flex gap-2 justify-center items-center mt-2 hover:text-red-600"
            onClick={() => toggleShowOptions()}
          >
            <BsTrash />
            <p>Delete Post</p>
          </div>
        </div>
      )}
      <div className="w-12 h-12 flex-shrink-0">
        <img
          className="rounded-full shadow-sm"
          src="https://randomuser.me/api/portraits/men/11.jpg"
          alt="user image"
        />
      </div>
      <div>
        <div className="flex gap-x-2">
          <p>John Doe</p>
          <p className="text-slate-400">@Johndoe</p>
        </div>
        <div className="cursor-pointer" onClick={() => navigate("/posts")}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
          minus nam dolorum tenetur sit placeat iure maxime laudantium dolore
          labore maiores eaque volup.
        </div>
        <div className="mt-5 flex justify-between">
          <div className="flex justify-center gap-1">
            <button className="material-icons hover:text-red-500 cursor-pointer">
              favorite_border
            </button>
            <p>30</p>
          </div>
          <div className="flex justify-center gap-1">
            <button
              className="material-icons hover:text-blue-500 cursor-pointer"
              onClick={() => navigate("/posts")}
            >
              chat_bubble_outline
            </button>
            <p>30</p>
          </div>

          <button className="material-icons hover:text-blue-500 cursor-pointer">
            bookmark_border
          </button>
        </div>
      </div>
    </div>
  );
};

export { Post };
