import {
  MdOutlineHome,
  MdHome,
  MdOutlineExplore,
  MdExplore,
  MdOutlineBookmarkBorder,
  MdBookmark,
  MdOutlineWbSunny,
} from "react-icons/md";
import { HiOutlineMoon } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { usePostModal, useTheme } from "../../hooks";
import { PrimaryButton } from "../../components";

const SideBar = () => {
  const { toggleTheme, theme } = useTheme();
  const { toggleShowPostModal } = usePostModal();
  return (
    <div className="hidden sm:flex flex-col justify-between sticky h-screen top-0 py-3">
      <ul className="p-4 flex flex-col gap-y-5 bg-slate-100 rounded dark:bg-slate-800">
        <li>
          <NavLink
            to={"/home"}
            className="flex items-center p-2 font-normal text-slate-900 rounded-lg dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 text-3xl"
          >
            {({ isActive }) =>
              isActive ? (
                <>
                  <div className="xl:mr-2 flex">
                    <MdHome />
                  </div>
                  <span className="ml-3 text-xl hidden xl:block font-bold">
                    Home
                  </span>
                </>
              ) : (
                <>
                  <div className="xl:mr-2 flex">
                    <MdOutlineHome />
                  </div>
                  <span className="ml-3 text-xl hidden xl:block">Home</span>
                </>
              )
            }
          </NavLink>
        </li>

        <li>
          <NavLink
            to={"/explore"}
            className="flex items-center p-2 font-normal text-slate-900 rounded-lg dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 text-3xl"
          >
            {({ isActive }) =>
              isActive ? (
                <>
                  <div className="xl:mr-2 flex">
                    <MdExplore />
                  </div>
                  <span className="ml-3 text-xl hidden xl:block font-bold">
                    Explore
                  </span>
                </>
              ) : (
                <>
                  <div className="xl:mr-2 flex">
                    <MdOutlineExplore />
                  </div>
                  <span className="ml-3 text-xl hidden xl:block">Explore</span>
                </>
              )
            }
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/bookmarks"}
            className="flex items-center p-2 font-normal text-slate-900 rounded-lg dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 text-3xl"
          >
            {({ isActive }) =>
              isActive ? (
                <>
                  <div className="xl:mr-2 flex">
                    <MdBookmark />
                  </div>
                  <span className="ml-3 text-xl hidden xl:block font-bold">
                    Bookmarks
                  </span>
                </>
              ) : (
                <>
                  <div className="xl:mr-2 flex">
                    <MdOutlineBookmarkBorder />
                  </div>
                  <span className="ml-3 text-xl hidden xl:block">
                    Bookmarks
                  </span>
                </>
              )
            }
          </NavLink>
        </li>
        <li className="hidden xl:block">
          <PrimaryButton fullWidth={true} clickHandler={toggleTheme}>
            Toggle theme
          </PrimaryButton>
        </li>
        {theme === "dark" ? (
          <li className="p-2 block xl:hidden text-3xl">
            <MdOutlineWbSunny onClick={toggleTheme} />
          </li>
        ) : (
          <li className="p-2 block xl:hidden text-3xl">
            <HiOutlineMoon onClick={toggleTheme} />
          </li>
        )}
        <li className="hidden xl:block ">
          <PrimaryButton
            fullWidth={true}
            clickHandler={(event) => {
              event.preventDefault();
              toggleShowPostModal();
            }}
          >
            Create post
          </PrimaryButton>
        </li>
      </ul>
      <div className="flex mb-3 p-4 cursor-pointer rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600">
        <div className="w-12 h-12 flex-shrink-0">
          <img
            className="rounded-full shadow-sm"
            src="https://randomuser.me/api/portraits/men/11.jpg"
            alt="user image"
          />
        </div>
        <div className=" flex-col gap-x-2 ml-3 hidden xl:flex">
          <NavLink to={"/profile"}>
            <p>John Doe</p>
            <p className="text-slate-400">@Johndoe</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export { SideBar };
