import "./App.css";
import { AppRoutes } from "./app-routes/AppRoutes";
import { FollowTab, SideBar, MobileBottomBar, CreatePostBtn } from "./layouts";
import { CreatePostModal } from "./components";
import { useTheme } from "./hooks";

function App() {
  const { theme } = useTheme();
  return (
    <div
      className={
        theme === "dark" ? "dark text-white bg-gray-800" : "bg-gray-100"
      }
    >
      <div className="app-main">
        <CreatePostBtn />
        <SideBar />
        <AppRoutes />
        <FollowTab />
        <MobileBottomBar />
        <CreatePostModal />
      </div>
    </div>
  );
}

export default App;
