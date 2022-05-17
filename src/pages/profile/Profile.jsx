import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiLogOut } from "react-icons/fi";
import {
  Post,
  PrimaryOutlinedButton,
  EditProfileModal,
  PrimaryButton,
  UserListModal,
  DefaultProfilePic,
  Loader,
} from "../../components";
import { followUser, signOut, unFollowUser } from "../../features";

const Profile = () => {
  const dispatch = useDispatch();
  const { username } = useParams();
  const {
    user: { users, uploadingImg },
    auth: { token, userDetails: authUserDetails },
  } = useSelector((state) => state);
  const currentUserDetails = users?.find((user) => user.username === username);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setshowFollowing] = useState(false);

  return (
    <div className="relative">
      {showFollowing && (
        <UserListModal
          title={"Following"}
          userList={currentUserDetails?.following}
          setShowUserList={setshowFollowing}
        />
      )}

      {showFollowers && (
        <UserListModal
          title={"Followers"}
          userList={currentUserDetails?.followers}
          setShowUserList={setShowFollowers}
        />
      )}

      {showEditProfile && (
        <EditProfileModal
          currentUser={currentUserDetails}
          setShowEditProfile={setShowEditProfile}
        />
      )}
      <div className="relative flex flex-col gap-5 items-center mx-auto pt-5 text-center max-w-lg">
        <div className="w-32 h-32 text-3xl flex justify-center items-center">
          {uploadingImg ? (
            <Loader />
          ) : currentUserDetails?.profileUrl ? (
            <img
              className="rounded-full m-auto w-[100%] h-[100%]"
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
        {authUserDetails?.username === currentUserDetails?.username && (
          <FiLogOut
            className="absolute cursor-pointer top-5 right-2 text-xl"
            onClick={() => dispatch(signOut())}
          />
        )}
        <div className="flex flex-col gap-2 mt-4">
          <p>{`${currentUserDetails?.firstName} ${currentUserDetails?.lastName}`}</p>
          <p className="text-slate-400">@{currentUserDetails?.username}</p>
          {authUserDetails?.username === currentUserDetails?.username ? (
            <PrimaryOutlinedButton
              clickHandler={() => setShowEditProfile(true)}
            >
              Edit profile
            </PrimaryOutlinedButton>
          ) : currentUserDetails?.followers.find(
              (user) => user.username === authUserDetails?.username
            ) ? (
            <PrimaryOutlinedButton
              clickHandler={() =>
                dispatch(
                  unFollowUser({ idToUnFollow: currentUserDetails?._id, token })
                )
              }
            >
              Unfollow
            </PrimaryOutlinedButton>
          ) : (
            <PrimaryButton
              clickHandler={() =>
                dispatch(
                  followUser({ idToFollow: currentUserDetails?._id, token })
                )
              }
            >
              Follow
            </PrimaryButton>
          )}
        </div>
        <div className="flex flex-col gap-y-3">
          {currentUserDetails?.bio}
          <a
            href={currentUserDetails?.website}
            target="_blank"
            className="text-blue-400"
          >
            {currentUserDetails?.website}
          </a>
        </div>

        <div className="flex gap-5 mt-5">
          <div>
            <p>1k</p>
            <p>Posts</p>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setShowFollowers(true)}
          >
            <p>{currentUserDetails?.followers.length}</p>
            <p>Followers</p>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setshowFollowing(true)}
          >
            <p>{currentUserDetails?.following.length}</p>
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
