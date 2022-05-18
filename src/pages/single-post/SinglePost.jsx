import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Comment, DefaultProfilePic } from "../../components";
import {
  addLike,
  addBookmark,
  removeLike,
  removeBookmark,
} from "../../features";

const SinglePost = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const {
    user: { users },
    auth: {
      userDetails: { username: authUserName },
      token,
    },
    post: { posts },
    bookmark: { bookmarks },
  } = useSelector((state) => state);
  const currentPost = posts?.find((post) => post.id === params?.postId);

  const getUserByUserName = (username) =>
    users.filter((user) => user.username === username)[0];
  const currentUserDetails = getUserByUserName(currentPost?.username);

  const copyPostUrlTOClipboard = async () => {
    await navigator.clipboard.writeText(
      `https://deploy-preview-4--sweet-cucurucho-5e95a3.netlify.app/posts/${params?.postId}`
    );
    toast.success("Link copied to clipboard");
  };

  return (
    <div>
      <h1 className="text-2xl pt-7 mb-4 pl-3">Post</h1>

      <div className="relative my-3 rounded-xl p-5">
        <div>
          <div className="flex gap-x-2">
            <div className="w-12 h-12 flex-shrink-0">
              {currentUserDetails?.profileUrl ? (
                <img
                  className="rounded-full shadow-sm"
                  src={currentUserDetails?.profileUrl}
                  alt="user image"
                />
              ) : (
                <DefaultProfilePic>
                  {currentUserDetails?.firstName[0] +
                    currentUserDetails?.lastName[0]}
                </DefaultProfilePic>
              )}
            </div>
            <div className="flex flex-col mb-2">
              <p>{`${currentUserDetails?.firstName} ${currentUserDetails?.lastName}`}</p>
              <p className="text-slate-400">@{currentUserDetails?.username}</p>
            </div>
          </div>
          <div className="my-4">{currentPost?.content}</div>
          <p className="text-slate-400">{currentPost?.createdAt}</p>

          <div className="flex items-center gap-4 my-4 p-2 border-y-2 border-slate-400 ">
            <span>
              <span className="font-bold">{currentPost?.likes.likeCount}</span>
              Likes
            </span>
            <span>
              <span className="font-bold">2</span> Comments
            </span>
          </div>

          <div className="mt-5 flex justify-between pb-2 border-b-2 border-slate-400 ">
            <div className="flex justify-center gap-1">
              {currentPost?.likes?.likedBy.find(
                (user) => user.username === authUserName
              ) ? (
                <button
                  className="material-icons text-red-500 cursor-pointer"
                  onClick={() =>
                    dispatch(removeLike({ postId: currentPost?._id, token }))
                  }
                >
                  favorite
                </button>
              ) : (
                <button
                  className="material-icons hover:text-red-500 cursor-pointer"
                  onClick={() =>
                    dispatch(addLike({ postId: currentPost?._id, token }))
                  }
                >
                  favorite_border
                </button>
              )}
              <p>{currentPost?.likes?.likeCount}</p>
            </div>
            <div className="flex justify-center gap-1">
              <button className="material-icons cursor-default">
                chat_bubble_outline
              </button>
            </div>

            {bookmarks?.find((id) => id === currentPost._id) ? (
              <button
                className="material-icons text-blue-500 cursor-pointer"
                onClick={() =>
                  dispatch(removeBookmark({ token, postId: currentPost?._id }))
                }
              >
                bookmark
              </button>
            ) : (
              <button
                className="material-icons hover:text-blue-500 cursor-pointer"
                onClick={() =>
                  dispatch(addBookmark({ token, postId: currentPost?._id }))
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
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export { SinglePost };
