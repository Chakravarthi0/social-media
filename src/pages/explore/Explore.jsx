import { useSelector } from "react-redux";
import { Post } from "../../components";

const Explore = () => {
  const { posts } = useSelector((state) => state.post);
  return (
    <div>
      <h1 className="text-2xl pt-7 mb-4 pl-5">Explore</h1>
      {posts.map((post) => (
        <Post postDetails={post} />
      ))}
    </div>
  );
};

export { Explore };
