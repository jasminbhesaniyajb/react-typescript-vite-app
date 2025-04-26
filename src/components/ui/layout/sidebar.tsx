import React from "react";
import { NavLink } from "react-router-dom";
import { Palette, CheckSquare, Users } from "lucide-react";

const menuItems = [
  { title: "Theme", icon: <Palette className="h-5 w-5" />, path: "/theme" },
  { title: "Students", icon: <Users className="h-5 w-5" />, path: "/students" },
  { title: "To-Do List", icon: <CheckSquare className="h-5 w-5" />, path: "/todo" },
];

export const Sidebar = () => {
  return (
    <aside className="flex flex-col h-full border-r bg-background">
     
      <nav className="flex-1 overflow-auto py-4">
        <ul className="grid gap-1 px-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-accent hover:text-accent-foreground"
                  }`
                }
              >
                {item.icon}
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};