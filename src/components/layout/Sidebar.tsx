import { NavLink } from "react-router-dom";
import { LuLayoutDashboard, LuBookOpen } from "react-icons/lu";
import { MdFavoriteBorder, MdOutlineFolderCopy } from "react-icons/md";
import { IoStatsChartOutline } from "react-icons/io5";
import { GoGear } from "react-icons/go";
import Logo from "../ui/Logo";
import MiniQoute from "../ui/MiniQoute";

function Sidebar() {
  return (
    <aside className="bg-[#eeeeee] text-main-accent flex flex-col gap-10 w-80">
      <Logo />
      <nav>
        <ul className="flex flex-col items-start justify-center text-xl ml-15 gap-3">
          <li className="py-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex flex-row items-center gap-3 transition-all duration-200 ease-in pb-1 font-semibold ${
                  isActive
                    ? "text-green-700 border-b-2 border-b-green-700 translate-x-1.5"
                    : "text-main-accent border-b-2 border-b-transparent"
                }`
              }
            >
              <LuLayoutDashboard />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li className="py-3">
            <NavLink
              to="/books"
              className={({ isActive }) =>
                `flex flex-row items-center gap-3 transition-all duration-200 ease-in pb-1 font-semibold ${
                  isActive
                    ? "text-green-700 border-b-2 border-b-green-700 translate-x-1.5"
                    : "text-main-accent border-b-2 border-b-transparent"
                }`
              }
            >
              <LuBookOpen />
              <span>Books</span>
            </NavLink>
          </li>
          <li className="py-3">
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `flex flex-row items-center gap-3 transition-all duration-200 ease-in pb-1 font-semibold ${
                  isActive
                    ? "text-green-700 border-b-2 border-b-green-700 translate-x-1.5"
                    : "text-main-accent border-b-2 border-b-transparent"
                }`
              }
            >
              <MdFavoriteBorder />
              <span>Favorites</span>
            </NavLink>
          </li>
          <li className="py-3">
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                `flex flex-row items-center gap-3 transition-all duration-200 ease-in pb-1 font-semibold ${
                  isActive
                    ? "text-green-700 border-b-2 border-b-green-700 translate-x-1.5"
                    : "text-main-accent border-b-2 border-b-transparent"
                }`
              }
            >
              <MdOutlineFolderCopy />
              <span>Categories</span>
            </NavLink>
          </li>
          <li className="py-3">
            <NavLink
              to="/stats"
              className={({ isActive }) =>
                `flex flex-row items-center gap-3 transition-all duration-200 ease-in pb-1 font-semibold ${
                  isActive
                    ? "text-green-700 border-b-2 border-b-green-700 translate-x-1.5"
                    : "text-main-accent border-b-2 border-b-transparent"
                }`
              }
            >
              <IoStatsChartOutline />
              <span>Stats</span>
            </NavLink>
          </li>
          <li className="py-3">
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `flex flex-row items-center gap-3 transition-all duration-200 ease-in pb-1 font-semibold ${
                  isActive
                    ? "text-green-700 border-b-2 border-b-green-700 translate-x-1.5"
                    : "text-main-accent border-b-2 border-b-transparent"
                }`
              }
            >
              <GoGear />
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="px-3">
        <MiniQoute />
      </div>
    </aside>
  );
}

export default Sidebar;
