import React, { useEffect } from "react";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../firebase.config";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [loginuser, loadingtwo] = useAuthState(auth);
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();

  let lodingElement;
  if (loading || loadingtwo) {
    lodingElement = (
      <div className="  w-full flex justify-center items-center">
        loading...
      </div>
    );
  }
  if (loginuser) {
    navigate("/");
  }

  //error container
  let errorElement;
  if (error) {
    errorElement = (
      <p className="text-red-900 text-sm text-center font-semibold">
        {error.message}
      </p>
    );
  }
  return (
    <>
      {loading && lodingElement}
      {errorElement}
      <button
        onClick={() => signInWithGoogle()}
        className="shadow-gray-900 shadow-md text-[#5468FF] w-full hover:text-white hover:bg-[#5468FF] font-bold rounded-lg my-4 py-2 flex items-center justify-center"
      >
        Google Sign In
      </button>
    </>
  );
};

export default SocialLogin;
