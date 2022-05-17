import { useRef, useState } from "react";
import { GiSettingsKnobs } from "react-icons/gi";
import { FiTrendingUp } from "react-icons/fi";
import { BsSortDown, BsSortUp } from "react-icons/bs";
import { Post, CreatePost } from "../../components";
import { useDetectClick } from "../../hooks";

const Home = () => {
  const [showSortOptions, setShowSortOptions] = useState(false);
  const toggleShowOptions = () => {
    setShowSortOptions((prev) => !prev);
  };
  const sortOptionsRef = useRef(null);
  useDetectClick(sortOptionsRef, setShowSortOptions);
  return (
    <div>
      <h1 className="text-2xl pt-7 mb-4 pl-5">Home</h1>
      <div className="hidden lg:block">
        <CreatePost />
      </div>
      <div className="relative flex justify-between items-center pl-5 pr-1">
        <h1 className="text-xl pt-7 mb-4">Latest posts</h1>
        <GiSettingsKnobs
          className="text-xl cursor-pointer"
          onClick={toggleShowOptions}
        />
        {showSortOptions && (
          <div
            ref={sortOptionsRef}
            className="absolute top-[50px] z-10 right-0 p-2 rounded-lg cursor-pointer bg-slate-200 dark:bg-black"
          >
            <div
              className="flex gap-2 items-center hover:text-blue-500"
              onClick={() => {
                toggleShowOptions();
              }}
            >
              <FiTrendingUp />
              <p>Trending</p>
            </div>
            <div
              className="flex gap-2 items-center mt-2 hover:text-blue-500"
              onClick={toggleShowOptions}
            >
              <BsSortDown />
              <p>Latest</p>
            </div>
            <div
              className="flex gap-2 items-center mt-2 hover:text-blue-500"
              onClick={toggleShowOptions}
            >
              <BsSortUp />
              <p>Oldest</p>
            </div>
          </div>
        )}
      </div>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export { Home };
