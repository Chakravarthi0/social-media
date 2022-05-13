import { useState } from "react";
import { FiLogOut } from "react-icons/fi";
import {
  Post,
  PrimaryOutlinedButton,
  EditProfileModal,
} from "../../components";

const Profile = () => {
  const [showEditProfile, setShowEditProfile] = useState(false);
  const toggleEditProfile = () => {
    setShowEditProfile((prev) => !prev);
  };
  return (
    <div>
      {showEditProfile && (
        <EditProfileModal toggleEditProfile={toggleEditProfile} />
      )}
      <div className="relative flex flex-col gap-5 items-center mx-auto pt-5 text-center max-w-lg">
        <div className="w-40 h-28">
          <img
            className="rounded-full m-auto"
            src="https://randomuser.me/api/portraits/men/11.jpg"
            alt="user image"
          />
        </div>
        <FiLogOut className="absolute cursor-pointer top-5 right-2 text-xl" />
        <div className="flex flex-col gap-2 mt-4">
          <p>John Doe</p>
          <p className="text-slate-400">@Johndoe</p>
          <PrimaryOutlinedButton clickHandler={toggleEditProfile}>
            Edit profile
          </PrimaryOutlinedButton>
        </div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
          nostrum ipsum, eius necessitatibus delectus sequi.
        </div>
        <div className="flex gap-5 mt-5">
          <div>
            <p>1k</p>
            <p>Posts</p>
          </div>
          <div>
            <p>78k</p>
            <p>Followers</p>
          </div>
          <div>
            <p>368</p>
            <p>Following</p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="text-2xl">Recent posts</h1>
        <Post />
      </div>
    </div>
  );
};

export { Profile };
