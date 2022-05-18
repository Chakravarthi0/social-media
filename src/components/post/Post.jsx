import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { BsPencil, BsTrash } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  openPostModal,
  followUser,
  unFollowUser,
  deletePost,
  setEditingPost,
  addLike,
  removeLike,
  addBookmark,
  removeBookmark,
} from "../../features";
import { useDetectClick } from "../../hooks";
import { DefaultProfilePic } from "../";
import toast from "react-hot-toast";

const Post = ({ postDetails }) => {
  const { content, username, id: postId, likes } = postDetails;
  const [showPostOptions, setShowPostOptions] = useState(false);
  const optionsModalRef = useRef(null);
  const dispatch = useDispatch();
  const {
    user: { users },
    auth: {
      userDetails: { username: authUserName },
      token,
    },
    bookmark: { bookmarks },
  } = useSelector((state) => state);
  const currentUserDetails = users?.find((user) => user.username === username);

  const navigate = useNavigate();
  const toggleShowOptions = () => {
    setShowPostOptions((prev) => !prev);
  };
  useDetectClick(optionsModalRef, setShowPostOptions);
  const copyPostUrlTOClipboard = async () => {
    await navigator.clipboard.writeText(
      `https://deploy-preview-4--sweet-cucurucho-5e95a3.netlify.app/posts/${postId}`
    );
    toast.success("Link copied to clipboard");
  };

  return (
    <div className="relative flex gap-x-5 my-3 rounded-xl p-5 hover:bg-slate-200 dark:hover:bg-slate-700">
      <div
        className="absolute top-0 right-5 cursor-pointer text-2xl"
        onClick={() => toggleShowOptions()}
      >
        <MdOutlineMoreHoriz />
      </div>
      {showPostOptions && (
        <div
          ref={optionsModalRef}
          className="absolute top-4 right-0 p-2 rounded-lg cursor-pointer bg-slate-200 dark:bg-black"
        >
          {authUserName === currentUserDetails?.username ? (
            <>
              <div
                className="flex gap-2 justify-center items-center hover:text-blue-500"
                onClick={() => {
                  dispatch(setEditingPost(postDetails));
                  dispatch(openPostModal());
                }}
              >
                <BsPencil />
                <p>Edit Post</p>
              </div>
              <div
                className="flex gap-2 justify-center items-center mt-2 hover:text-red-600"
                onClick={() => {
                  dispatch(deletePost({ postId: postDetails?._id, token }));
                  toggleShowOptions();
                }}
              >
                <BsTrash />
                <p>Delete Post</p>
              </div>
            </>
          ) : currentUserDetails?.followers.find(
              (user) => user.username === authUserName
            ) ? (
            <div
              className="flex gap-2 justify-center items-center mt-2 hover:text-red-600"
              onClick={() => {
                dispatch(
                  unFollowUser({ idToUnFollow: currentUserDetails?._id, token })
                );
                toggleShowOptions();
              }}
            >
              <p>Unfollow</p>
            </div>
          ) : (
            <div
              className="flex gap-2 justify-center items-center hover:text-blue-500"
              onClick={() => {
                dispatch(
                  followUser({ idToFollow: currentUserDetails?._id, token })
                );
                toggleShowOptions();
              }}
            >
              <p>Follow</p>
            </div>
          )}
        </div>
      )}
      <div className="w-12 h-12 flex-shrink-0">
        {currentUserDetails?.profileUrl ? (
          <img
            className="rounded-full shadow-sm"
            src={currentUserDetails?.profileUrl}
            alt="user image"
          />
        ) : (
          <DefaultProfilePic>
            {currentUserDetails?.firstName[0]} {currentUserDetails?.lastName[0]}
          </DefaultProfilePic>
        )}
      </div>
      <div className="w-[100%]">
        <div className="flex gap-x-2">
          <p>{`${currentUserDetails?.firstName} ${currentUserDetails?.lastName}`}</p>
          <p className="text-slate-400">@{username}</p>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => navigate(`/posts/${postId}`)}
        >
          {content}
        </div>
        <p className="text-slate-400">{postDetails?.createdAt}</p>
        <div className="mt-5 flex justify-between">
          <div className="flex justify-center gap-1">
            {postDetails?.likes?.likedBy.find(
              (user) => user.username === authUserName
            ) ? (
              <button
                className="material-icons text-red-500 cursor-pointer"
                onClick={() =>
                  dispatch(removeLike({ postId: postDetails?._id, token }))
                }
              >
                favorite
              </button>
            ) : (
              <button
                className="material-icons hover:text-red-500 cursor-pointer"
                onClick={() =>
                  dispatch(addLike({ postId: postDetails?._id, token }))
                }
              >
                favorite_border
              </button>
            )}
            <p>{likes?.likeCount}</p>
          </div>
          <div className="flex justify-center gap-1">
            <button
              className="material-icons hover:text-blue-500 cursor-pointer"
              onClick={() => navigate(`/posts/${postId}`)}
            >
              chat_bubble_outline
            </button>
            <p>30</p>
          </div>
          {bookmarks?.find((id) => id === postDetails._id) ? (
            <button
              className="material-icons text-blue-500 cursor-pointer"
              onClick={() =>
                dispatch(removeBookmark({ token, postId: postDetails?._id }))
              }
            >
              bookmark
            </button>
          ) : (
            <button
              className="material-icons hover:text-blue-500 cursor-pointer"
              onClick={() =>
                dispatch(addBookmark({ token, postId: postDetails?._id }))
              }
            >
              bookmark_border
            </button>
          )}

          <button
            className="material-icons hover:text-blue-500 cursor-pointer"
            onClick={copyPostUrlTOClipboard}
          >
            share
          </button>
        </div>
      </div>
    </div>
  );
};

export { Post };
