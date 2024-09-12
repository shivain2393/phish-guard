import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { X } from "lucide-react";

const Navbar = () => {
  const activeClass = "bg-white text-blue-600";
  const baseClass =
    "hover:bg-white hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-all";

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink
              to="/"
              className="text-2xl font-bold text-white sm:text-4xl"
            >
              PhishGuard
            </NavLink>
          </div>
          <div className="sm:hidden">
            <RxHamburgerMenu
              onClick={() => setIsOpen(true)}
              className="h-6 w-6 cursor-pointer"
            />
          </div>

          <div
            className={`absolute h-full w-2/3 bg-white top-0 z-50 flex p-4 justify-between ${
              isOpen ? "right-0" : "-right-full"
            } transition-all duration-300 ease-linear sm:hidden`}
          >
            <div className="flex flex-col p-4 mt-4 text-blue-500 font-medium text-xl gap-3">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-500 text-white py-2 px-3 rounded-md"
                    : "px-3"
                }
              >
                Home
              </NavLink>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-500 text-white py-2 px-3 rounded-md"
                    : "px-3"
                }
              >
                About
              </NavLink>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-500 text-white py-2 px-3 rounded-md"
                    : "px-3"
                }
              >
                Contact Us
              </NavLink>
            </div>
            <div>
              <X
                onClick={() => setIsOpen(false)}
                className="h-6 w-6 text-blue-500 cursor-pointer"
              />
            </div>
          </div>

          <div className="hidden md:flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `${baseClass} ${activeClass}`
                  : `${baseClass} text-white`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? `${baseClass} ${activeClass}`
                  : `${baseClass} text-white`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? `${baseClass} ${activeClass}`
                  : `${baseClass} text-white`
              }
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
