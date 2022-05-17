import { useLocation } from "react-router-dom";
import "./App.css";
import { AppRoutes } from "./app-routes/AppRoutes";
import { FollowTab, SideBar, MobileBottomBar, CreatePostBtn } from "./layouts";
import { CreatePostModal } from "./components";
import { useTheme } from "./hooks";

function App() {
  const { theme } = useTheme();
  const { pathname } = useLocation();

  const sidebarRestrictedRoutes = ["/","/signup"]
  return (
    <div
      className={
        theme === "dark" ? "dark text-white bg-gray-800" : "bg-gray-100"
      }
    >
      <div className={sidebarRestrictedRoutes.includes(pathname) ? "" : "app-main"}>
        {!sidebarRestrictedRoutes.includes(pathname) && <CreatePostBtn />}
        {!sidebarRestrictedRoutes.includes(pathname) && <SideBar />}
        <AppRoutes />
        {!sidebarRestrictedRoutes.includes(pathname) && <FollowTab />}
        <MobileBottomBar />
        <CreatePostModal />
      </div>
    </div>
  );
}

export default App;
