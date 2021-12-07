import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="overflow-hidden">
      <nav class="nav  sticky z-30 flex flex-wrap items-center justify-between px-4 ">
        <div class="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
          <span class="font-semibold text-xl tracking-tight text-white">
            Awal Hossain
          </span>
        </div>

        <input class="menu-btn hidden" type="checkbox" id="menu-btn" />
        <label
          class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
          for="menu-btn"
        >
          <span class="navicon bg-grey-darkest flex items-center relative"></span>
        </label>

        <ul class="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
          <li class="border-t md:border-none">
            <Link
              to="/"
              class="block text-white md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold"
            >
              Home
            </Link>
          </li>

          <li class="border-t md:border-none">
            <Link
              to="/about"
              class="block text-white md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
            >
              About
            </Link>
          </li>

          <li class="border-t md:border-none">
            <Link
              to="/blog"
              class="block text-white md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
