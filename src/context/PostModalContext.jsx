import { React, createContext, useState } from "react";

const postModalContext = createContext({});

const PostModalProvider = ({ children }) => {
  const [showPostModal, setShowPostModal] = useState(false);
  return (
    <postModalContext.Provider value={{ showPostModal, setShowPostModal }}>
      {children}
    </postModalContext.Provider>
  );
};

export { PostModalProvider, postModalContext };
