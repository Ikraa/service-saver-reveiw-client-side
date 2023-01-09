import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.config";
import "./menu.css";
const Menubar = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  if (loading) {
    return;
  }

  const linkTag = (
    <>
      <li>
        <Link to="/" className="text-white py-2 text-[18px] lg:px-4 mr-[5px] ">
          Home
        </Link>
      </li>
      <li>
        <Link
          to={"/service"}
          className="text-white py-2 text-[18px] px-4 mr-[5px] "
        >
          Service
        </Link>
      </li>
      {/* <Link
    to={"/review"}
    className="text-white py-2 text-[18px] px-4 mr-[5px] "
  >
    Review
  </Link> */}
      {user && (
        <>
          <li>
            <Link
              to="/review"
              className="text-white py-2 text-[18px] px-4 mr-[5px] "
            >
              My Review
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="/addservice"
              className="text-white py-2 text-[18px] px-4 mr-[5px] "
            >
              Add Service
            </Link>
          </li>

          <li>
            <Link
              to="/blog"
              className="text-white py-2 text-[18px] px-4 mr-[5px] "
            >
              Blog
            </Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <>
      {/* ======================================= */}

      <div className="navbar menu-link bg-slate-700">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-700 rounded-box w-52 text-black"
            >
              {linkTag}
            </ul>
          </div>
          <div
            onClick={() => navigate("/")}
            to="/"
            className="btn text-white btn-ghost normal-case text-xl"
          >
            Service Saver
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{linkTag}</ul>
        </div>
        <div className="navbar-end">
          {!user ? (
            <Link
              to="/login"
              className="text-white py-2 text-[18px] px-4 mr-[5px] "
            >
              LogIn
            </Link>
          ) : (
            <button
              onClick={() => signOut(auth)}
              className="btn text-white btn-sm btn-error"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Menubar;
