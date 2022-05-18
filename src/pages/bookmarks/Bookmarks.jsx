import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Post } from "../../components";
import { getAllBookmarks } from "../../features";

const Bookmarks = () => {
  const dispatch = useDispatch();
  const {
    post: { posts },
    bookmark: { bookmarks },
    auth: { token },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAllBookmarks({ token }));
  }, [token, dispatch]);

  const bookmarkedPosts = posts?.filter((post) => bookmarks.includes(post._id));

  return (
    <div>
      <h1 className="text-2xl pt-7 pl-5">Bookmarks</h1>
      {bookmarkedPosts?.length < 1 && (
        <h2 className="text-xl text-center pt-7 pl-5">No bookmarks</h2>
      )}
      {bookmarkedPosts.map((post) => (
        <Post postDetails={post} key={post?._id} />
      ))}
    </div>
  );
};

export { Bookmarks };
