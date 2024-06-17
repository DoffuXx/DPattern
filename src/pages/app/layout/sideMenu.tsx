import navLinks from "@/registry/app/navLinks";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="flex h-screen">
      <aside
        id="default-sidebar"
        className=" top-0 left-0 z-40 w-32 md:w-64 h-screen"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <ScrollArea.Root className="ScrollAreaRoot">
              <ScrollArea.Viewport className="ScrollAreaViewport">
                {navLinks.map((link) => (
                  <li key={link.title}>
                    <p className="text-sm my-2 font-work-sans font-medium text-muted-foreground px-4 pb-2 max-w-[248px] truncate">
                      {link.title}
                    </p>
                    {link.subLinks && (
                      <ul
                        id={`dropdown-${link.title}`}
                        className="space-y-2 mt-1 font-work-sans"
                      >
                        {link.subLinks.map((subLink) => (
                          <li key={subLink.title}>
                            <NavLink
                              to={subLink.path}
                              className="flex items-center w-full p-2 text-gray-900 transition text-sm duration-75 pl-6 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                              style={({ isActive }) => ({
                                fontWeight: isActive ? "600" : "",
                              })}
                            >
                              <subLink.icon className="w-5 h-5 me-2" />
                              {subLink.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ScrollArea.Viewport>
              <ScrollArea.Scrollbar
                className="ScrollAreaScrollbar"
                orientation="vertical"
              >
                <ScrollArea.Thumb className="ScrollAreaThumb" />
              </ScrollArea.Scrollbar>
              <ScrollArea.Scrollbar
                className="ScrollAreaScrollbar"
                orientation="horizontal"
              >
                <ScrollArea.Thumb className="ScrollAreaThumb" />
              </ScrollArea.Scrollbar>
              <ScrollArea.Corner className="ScrollAreaCorner" />
            </ScrollArea.Root>
          </ul>
        </div>
      </aside>

      <div className="p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default SideMenu;
