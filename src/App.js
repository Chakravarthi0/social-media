import { useLocation } from "react-router-dom";
import "./App.css";
import { AppRoutes } from "./app-routes/AppRoutes";
import { FollowTab, SideBar, MobileBottomBar, CreatePostBtn } from "./layouts";
import { CreatePostModal } from "./components";
import { useTheme } from "./hooks";

function App() {
  const { theme } = useTheme();
  const { pathname } = useLocation();
  const routesWithSideBar = [
    "/home",
    "/explore",
    "/bookmarks",
    "/profile",
    "/posts",
  ];
  return (
    <div
      className={
        theme === "dark" ? "dark text-white bg-gray-800" : "bg-gray-100"
      }
    >
      <div className={routesWithSideBar.includes(pathname) ? "app-main" : ""}>
        {routesWithSideBar.includes(pathname) && <CreatePostBtn />}
        {routesWithSideBar.includes(pathname) && <SideBar />}
        <AppRoutes />
        {routesWithSideBar.includes(pathname) && <FollowTab />}
        <MobileBottomBar />
        <CreatePostModal />
      </div>
    </div>
  );
}

export default App;
