import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

export default function NavigationBar() {
  const pageLinks = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Settings", link: "/settings" },
    { title: "404: Error", link: "/PageNotFound" },
  ];

  // Base styles for navigation links
  const baseLinkStyles =
    "flex items-center px-4 py-3 mx-2 rounded-lg text-sm font-medium transition-all duration-200 ease-in-out hover:bg-gray-100";

  // Active link styles
  const activeLinkStyles =
    "bg-blue-50 text-blue-600 border-r-4 border-blue-600 shadow-sm";

  // Inactive link styles
  const inactiveLinkStyles = "text-gray-600 hover:text-gray-900";

  return (
    <>
      <div className="flex flex-col w-[15%] h-full bg-white shadow-xl">
        <div className="flex flex-col w-full h-full items-start justify-between">
          <div className="flex flex-col w-full">
            {/* Logo Section */}
            <div className="px-4 py-6 border-b border-gray-200">
              <NavLink to="/" className="block">
                <h1 className="text-2xl font-bold uppercase text-gray-800 hover:text-blue-600 transition-colors duration-200">
                  Logo
                </h1>
              </NavLink>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col py-4 space-y-1">
              {pageLinks.map((items, index) => (
                <NavLink
                  to={items.link}
                  key={index}
                  className={({ isActive }) =>
                    `${baseLinkStyles} ${
                      isActive ? activeLinkStyles : inactiveLinkStyles
                    }`
                  }
                  end={items.link === "/"}
                >
                  <span>{items.title}</span>
                  {/* Optional: Add an icon or indicator for active state */}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Logout Button */}
          <div className="px-4 py-6 w-full border-t border-gray-200">
            <NavLink to="/login" className="block w-full">
              <Button className="w-full" variant="destructive">
                Logout
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
