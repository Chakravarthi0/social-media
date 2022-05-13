import { useContext } from "react";
import { postModalContext } from "../context";

const usePostModal = () => {
  const { setShowPostModal, showPostModal } = useContext(postModalContext);
  const toggleShowPostModal = () => {
    setShowPostModal((prev) => !prev);
  };

  return { toggleShowPostModal, showPostModal };
};

export { usePostModal };
