import React from "react";
import {
  MdOutlineHome,
  MdOutlineExplore,
  MdOutlineBookmarkBorder,
  MdOutlinePersonOutline,
  MdOutlineWbSunny,
} from "react-icons/md";
import { HiOutlineMoon } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useTheme } from "../../hooks";

const MobileBottomBar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <ul className="flex sm:hidden justify-between fixed bottom-0 right-0 left-0 p-2 bg-slate-200 dark:bg-black text-[28px]">
      <li>
        <Link
          to={"/home"}
          className="flex items-center p-2 font-normal text-slate-900 rounded-lg dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
        >
          <MdOutlineHome />
        </Link>
      </li>

      <li>
        <Link
          to={"/explore"}
          className="flex items-center p-2 font-normal text-slate-900 rounded-lg dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
        >
          <MdOutlineExplore />
        </Link>
      </li>
      <li>
        <Link
          to={"/bookmarks"}
          className="flex items-center p-2 font-normal text-slate-900 rounded-lg dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
        >
          <MdOutlineBookmarkBorder />
        </Link>
      </li>
      <li>
        <Link
          to={"/profile"}
          className="flex items-center p-2 font-normal text-slate-900 rounded-lg dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700"
        >
          <MdOutlinePersonOutline />
        </Link>
      </li>
      {theme === "dark" ? (
        <li className="p-2 block xl:hidden text-10xl">
          <MdOutlineWbSunny onClick={toggleTheme} />
        </li>
      ) : (
        <li className="p-2 block xl:hidden text-10xl">
          <HiOutlineMoon onClick={toggleTheme} />
        </li>
      )}
    </ul>
  );
};

export { MobileBottomBar };
