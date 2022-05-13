import { useLocation } from "react-router-dom";
import "./App.css";
import { AppRoutes } from "./app-routes/AppRoutes";
import { FollowTab, SideBar, MobileBottomBar, CreatePostBtn } from "./layouts";
import { CreatePostModal } from "./components";
import { useTheme } from "./hooks";

function App() {
  const { theme } = useTheme();
  const { pathname } = useLocation();
  return (
    <div
      className={
        theme === "dark" ? "dark text-white bg-gray-800" : "bg-gray-100"
      }
    >
      <div
        className={pathname !== "/" && pathname !== "/signup" ? "app-main" : ""}
      >
        <CreatePostBtn />
        {pathname !== "/" && pathname !== "/signup" && <SideBar />}
        <AppRoutes />
        {pathname !== "/" && pathname !== "/signup" && <FollowTab />}
        <MobileBottomBar />
        <CreatePostModal />
      </div>
    </div>
  );
}

export default App;
