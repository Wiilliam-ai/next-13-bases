import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "..";
//import { ActiveLink } from '../active-link/ActiveLink';

const navItems = [
  {
    path: "/about",
    text: "About",
  },
  {
    path: "/pricing",
    text: "Pricing",
  },
  {
    path: "/contact",
    text: "Contact"
  },
];

export const Navbar = () => {
  return (
    <div className="p-3">
      <div className="flex bg-blue-800 bg-opacity-30 p-3 m-2 rounded container mx-auto justify-between items-center">
        <Link href={"/"}>
          <div className="flex items-center"> {/* Wrap content in a clickable anchor */}
            <HomeIcon size={24} />
            <span className="font-bold text-xl">Home</span>
          </div>
        </Link>
        <nav className="flex gap-2 items-center">
          {navItems.map((item) => (
            <ActiveLink key={item.path} {...item} />
          ))}
        </nav>
      </div>
    </div>
  );
};
