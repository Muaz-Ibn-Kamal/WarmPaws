import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../AouthContex/AouthContex";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    ...(user ? [{ to: "/myprofile", label: "My Profile" }] : []),
  ];

  const handleLogout = async () => {
    try {
      const name = user?.displayName || user?.email || "User";
      await logOut();
      toast.success(`Logout ${name}.`);
      navigate("/");
    } catch (err) {
      toast.error(err?.message || "Logout failed");
    }
  };

  return (
    <div className="navbar bg-white/60 backdrop-blur-xl shadow-lg sticky top-0 z-50 px-4 border-b border-blue-100">
      {/* Navbar Start */}
      <div className="navbar-start">
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
            className="menu menu-sm dropdown-content mt-3 z-50 bg-white/90 backdrop-blur-lg rounded-xl shadow-xl w-52 p-2 border border-blue-100"
          >
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className="premium-link"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <Link to="/" className="flex items-center">
          <p className="warmpaws-effect text-2xl font-extrabold tracking-wide">
            WarmPaws
          </p>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg font-medium gap-2">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className="premium-link"
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end gap-4">
        {/* User Avatar */}
        {user && (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} className="cursor-pointer relative group">
              <img
                className="w-10 h-10 rounded-full border-2 border-blue-400 shadow-md object-cover"
                src={user.photoURL}
                alt="Profile"
              />
            </div>

            <ul
              tabIndex={0}
              className="dropdown-content menu bg-white/95 backdrop-blur-lg shadow-xl rounded-xl w-52 p-3 border border-blue-100 mt-3"
            >
              <li className="font-semibold text-gray-700 px-3">
                {user.displayName || user.email}
              </li>
              <li>
                <Link to="/myprofile">Dashboard</Link>
              </li>
              <li>
                <button onClick={handleLogout} className="text-red-600">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}

        {/* Auth Buttons */}
        {!user && (
          <div className="flex gap-2">
            <Link to="/login" className="premium-btn-green">
              Login
            </Link>
            <Link to="/register" className="premium-btn-blue">
              Register
            </Link>
          </div>
        )}
      </div>

      {/* Custom Styles */}
      <style>
        {`
          .premium-link {
            color: black !important;
            font-weight: 600;
            background: transparent !important;
            border-radius: 0;
          }
          .premium-link:hover {
            color: black !important;
            background: transparent !important;
          }
          .warmpaws-effect {
            color: black !important;
            font-weight: 800;
            text-transform: uppercase;
          }
          .premium-btn-green {
            padding: 8px 16px;
            border-radius: 10px;
            font-weight: 600;
            background: linear-gradient(135deg, #34d399, #10b981);
            color: white;
          }
          .premium-btn-blue {
            padding: 8px 16px;
            border-radius: 10px;
            font-weight: 600;
            background: linear-gradient(135deg, #3b82f6, #2563eb);
            color: white;
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;
