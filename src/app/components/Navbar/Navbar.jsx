import Link from "next/link";
import React from "react";

const navItems = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/tuition",
    title: "Tuition",
  },
  {
    path: "/dashboard",
    title: "Dashboard",
  },
  {
    path: "/contact",
    title: "Contact",
  },
  {
    path: "/about",
    title: "About",
  },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center md:justify-between lg:px-6 h-16 border border-gray-500 rounded-lg">
      <h1 className="md:font-semibold md:text-2xl text-center text-3xl">
        Teacher's Corner
      </h1>
      <ul className="md:flex md:flex-row justify-center gap-3 items-center ">
        {navItems.map((navItem) => (
          <li key={navItem.path}>
            <Link
              className="md:block hidden text-white rounded-lg px-2 py-2"
              href={navItem.path}
            >
              {navItem.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
