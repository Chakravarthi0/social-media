import authReducer, { signOut } from "./auth/authSlice";
import userReducer, { uploadImg, toggleTheme } from "./user/userSlice";
import postReducer, { openPostModal, closePostModal } from "./post/postSlice";

export { signInUser, signUpUser } from "./auth/helpers";
export { getUsers, followUser, unFollowUser, updateUser } from "./user/helpers";
export {
  authReducer,
  signOut,
  userReducer,
  uploadImg,
  postReducer,
  openPostModal,
  closePostModal,
  toggleTheme,
};
