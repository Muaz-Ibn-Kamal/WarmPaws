import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../AouthContex/AouthContex";
import "./Navbar.css";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const links = (
    <>
      <li>
        <NavLink to="/" className="hover:text-blue-500 transition-colors">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="hover:text-blue-500 transition-colors">
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className="hover:text-blue-500 transition-colors"
        >
          Services
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/myprofile"
            className="hover:text-blue-500 transition-colors"
          >
            My Profile
          </NavLink>
        </li>
      )}
    </>
  );

  const handleLogout = async () => {
    try {
      const name = user?.displayName || user?.email || "User";
      await logOut(); 
      toast.success(`Logout ${name}.`);
      navigate("/");
    } catch (err) {
      console.error("Logout failed:", err);
      toast.error(err?.message || "Logout failed");
    }
  };

  return (
    <div className="navbar bg-blue-100 shadow-md sticky top-0 z-50 px-4">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Dropdown for Mobile */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        {/* Logo / Title */}
        <Link to="/" className="flex items-center">
          <p className="btn btn-ghost text-xl md:text-2xl font-bold text-blue-500">
            WarmPaws
          </p>
        </Link>
      </div>

      {/* Navbar Center (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-medium">
          {links}
        </ul>
      </div>

      {/* Navbar End (User Section + Buttons) */}
      <div className="navbar-end flex items-center gap-3">
        {user && (
          <Link to="/myprofile" className="flex items-center gap-2 mr-2">
            <div className="relative group">
              <img
                className="w-8 h-8 rounded-full border border-gray-300 object-cover"
                src={user.photoURL}
                alt={user.displayName || user.email}
                aria-label={user.displayName || user.email}
              />
              <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 hidden whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white group-hover:block">
                {user.displayName || user.email}
              </span>
            </div>
            <span className="hidden sm:inline font-semibold text-gray-700 ">
              {user.displayName}
            </span>
          </Link>
        )}

        {user ? (
          <button
            onClick={handleLogout}
            className="btn btn-error btn-sm sm:btn-md"
          >
            Logout
          </button>
        ) : (
          <div className="flex gap-2">
            <Link to="/login" className="btn btn-success btn-sm sm:btn-md">
              Login
            </Link>
            <Link to="/register" className="btn btn-secondary btn-sm sm:btn-md">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
