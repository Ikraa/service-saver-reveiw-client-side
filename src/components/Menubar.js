import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../firebase.config";
import "./menu.css";
const Menubar = () => {
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return;
  }
  return (
    <div className="bg-green-500 h-[60px] flex justify-between px-[40px] items-center">
      <h1 className="text-white text-3xl fnt-bold">Service Saver</h1>
      <div className="menu-link">
        <Link to="/" className="text-white py-2 text-[18px] px-4 mr-[5px] ">
          Home
        </Link>
        <Link
          to={"/service"}
          className="text-white py-2 text-[18px] px-4 mr-[5px] "
        >
          Service
        </Link>
        <Link
          to={"/review"}
          className="text-white py-2 text-[18px] px-4 mr-[5px] "
        >
          Review
        </Link>
        {user && (
          <>
            <Link
              to="/review"
              className="text-white py-2 text-[18px] px-4 mr-[5px] "
            >
              My Review
            </Link>
            <Link
              to="/addservice"
              className="text-white py-2 text-[18px] px-4 mr-[5px] "
            >
              Add Service
            </Link>
            <Link
              to="/blog"
              className="text-white py-2 text-[18px] px-4 mr-[5px] "
            >
              Blog
            </Link>
          </>
        )}
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
  );
};

export default Menubar;
