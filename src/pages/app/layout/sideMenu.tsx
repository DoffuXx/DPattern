import navLinks from "@/registry/app/navLinks";
import { useState } from "react";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <a href="#" className="flex items-center">
            <img
              src="/img/logo/dpattern.svg"
              className="w-56 h-40 overflow-auto object-cover"
              alt="DPattern Logo"
            />
          </a>
          <ul className="space-y-2 font-medium">
            {navLinks.map((link) => (
              <li key={link.title}>
                <div className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <span className="flex-1 ms-3 text-left uppercase text-red-400 text-sm rtl:text-right whitespace-nowrap font-bold">
                    {link.title}
                  </span>
                </div>
                {link.subLinks && (
                  <ul id={`dropdown-${link.title}`} className="space-y-2 mt-1">
                    {link.subLinks.map((subLink) => (
                      <li key={subLink.title}>
                        <Link
                          to={subLink.path}
                          className="flex items-center w-full p-2 text-gray-900 transition text-sm duration-75 pl-6 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          <subLink.icon className="w-5 h-5 me-2" />
                          {subLink.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SideMenu;
