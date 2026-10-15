import { NavLink } from "react-router-dom";

function Navbar() {
  const navClass = ({ isActive }) =>
    `font-medium transition ${
      isActive
        ? "text-blue-600"
        : "text-gray-700 hover:text-blue-600"
    }`;

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">

          <NavLink
            to="/"
            className="text-2xl font-bold text-blue-600"
          >
            MyWebsite
          </NavLink>

          <div className="flex gap-8">

            <NavLink to="/" className={navClass}>
              Home
            </NavLink>

            <NavLink to="/about" className={navClass}>
              About
            </NavLink>

            <NavLink to="/services" className={navClass}>
              Services
            </NavLink>

            <NavLink to="/contact" className={navClass}>
              Contact
            </NavLink>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;