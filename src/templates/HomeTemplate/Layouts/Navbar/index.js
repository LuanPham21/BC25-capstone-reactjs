import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="p-4 bg-coolGray-100 text-coolGray-800 bg-opacity-50 bg-black text-white fixed w-full z-10">
      <div className="container flex justify-between h-16 mx-auto">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <img
            src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
            alt="cyberlearn.vn"
          />
        </a>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/"
              style={{ fontSize: "1rem" }}
              className={({ isActive }) =>
                isActive ? "my-active nav-link" : "nav-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/about"
              style={{ fontSize: "1rem" }}
              className={({ isActive }) =>
                isActive ? "my-active nav-link" : "nav-link"
              }
            >
              About
            </NavLink>
          </li>
          <li className="flex">
            <NavLink
              rel="noopener noreferrer"
              to="/contact"
              style={{ fontSize: "1rem" }}
              className={({ isActive }) =>
                isActive ? "my-active nav-link" : "nav-link"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <NavLink
            to="/"
            /* activeClassName="font-semibold rounded dark:bg-violet-400 dark:text-gray-900" */
            className="self-center px-8 py-3 rounded"
            style={{ fontSize: "1rem" }}
          >
            Sign in
          </NavLink>
          <NavLink
            to="/"
            /* activeClassName="font-semibold rounded dark:bg-violet-400 dark:text-gray-900" */
            className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
            style={{ fontSize: "1rem" }}
          >
            Sign up
          </NavLink>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
