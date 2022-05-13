import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Explore,
  Bookmarks,
  SignUp,
  Profile,
  SignIn,
  SinglePost,
} from "../pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/posts" element={<SinglePost />} />
    </Routes>
  );
};

export { AppRoutes };
