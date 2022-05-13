import React from "react";
import { Comment } from "../../components";

const SinglePost = () => {
  return (
    <div>
      <h1 className="text-2xl pt-7 mb-4 pl-3">Post</h1>

      <div className="relative flex gap-x-5 my-3 rounded-xl p-5">
        <div>
          <div className="flex gap-x-2">
            <div className="w-12 h-12 flex-shrink-0">
              <img
                className="rounded-full shadow-sm"
                src="https://randomuser.me/api/portraits/men/11.jpg"
                alt="user image"
              />
            </div>
            <div className="flex flex-col mb-2">
              <p>John Doe</p>
              <p className="text-slate-400">@Johndoe</p>
            </div>
          </div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            minus nam dolorum tenetur sit placeat iure maxime laudantium dolore
            labore maiores eaque volup.
          </div>

          <div className="flex items-center gap-4 my-4 p-2 border-y-2 border-slate-400 ">
            <span>
              <span className="font-bold">2</span> Likes
            </span>
            <span>
              <span className="font-bold">2</span> Comments
            </span>
          </div>

          <div className="mt-5 flex justify-between pb-2 border-b-2 border-slate-400 ">
            <div className="flex justify-center gap-1">
              <button className="material-icons hover:text-red-500 cursor-pointer">
                favorite_border
              </button>
            </div>
            <div className="flex justify-center gap-1">
              <button className="material-icons cursor-default">
                chat_bubble_outline
              </button>
            </div>

            <button className="material-icons hover:text-blue-500 cursor-pointer">
              bookmark_border
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
