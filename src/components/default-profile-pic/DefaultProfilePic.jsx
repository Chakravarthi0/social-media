const DefaultProfilePic = ({ children }) => {
  return (
    <div className="bg-blue-600 rounded-[50%] m-auto h-[100%] w-[100%] flex items-center justify-center text-black dark:text-white ">
      {children}
    </div>
  );
};

export { DefaultProfilePic };
