import { useContext } from "react";
import { useNavigate } from "@remix-run/react";
import { DiscoverContext } from "../context";
import { DiscoverInfo } from "../types";
import { DropDownSVG, HamburgerSVG } from "./svg";

interface MoviesDropDownProps {
  type: DiscoverInfo["type"];
  onSelect: (info: DiscoverInfo) => void;
}

interface DropdownOptions {
  label: DiscoverInfo["category"];
  path: "popular" | "top_rated";
}

const NavDropDown: React.FC<MoviesDropDownProps> = ({ type, onSelect }) => {
  const navigate = useNavigate();
  const current = type.toLowerCase().split(" ").join("");

  const dropdownOptions: DropdownOptions[] = [
    {
      label: "Popular",
      path: "popular",
    },
    {
      label: "Top Rated",
      path: "top_rated",
    },
  ];
  return (
    <>
      <button
        id={`${current}Dropdown`}
        data-dropdown-toggle={`${current}Toggle`}
        data-dropdown-trigger="hover"
        className="text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-blue-800"
        type="button"
      >
        {type}
        <DropDownSVG className="w-2.5 h-2.5 ms-3" />
      </button>

      <div
        id={`${current}Toggle`}
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby={`${current}Dropdown`}
        >
          {dropdownOptions.map((option) => (
            <li key={option.label}>
              <a
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/${current}/${option.path}`);
                  onSelect({ category: option.label, type });
                }}
              >
                {option.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default function NavBar() {
  const {
    discovering: { category, type },
    setDiscovering,
  } = useContext(DiscoverContext);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          {category} {type}
        </span>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <HamburgerSVG className="w-5 h-5" />
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavDropDown type="Movies" onSelect={setDiscovering} />
              <NavDropDown type="Tv Shows" onSelect={setDiscovering} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
