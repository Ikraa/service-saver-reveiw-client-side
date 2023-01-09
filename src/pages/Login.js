import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Menubar from "../components/Menubar";
import Footer from "../components/Footer";
import SocialLogin from "./SocialLogin";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../firebase.config";

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });
  const [signInWithEmailAndPassword, signInuser, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleuser, googleloading, googleerror] =
    useSignInWithGoogle(auth);
  const [authUser, authLoading] = useAuthState(auth);
  const location = useLocation();
  const form = location?.state?.from?.pathname || "/";

  if (loading || googleloading || authLoading) {
    return;
  }

  //handleEmail
  const handleEmailChange = (e) => {
    const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
    if (isEmailValid) {
      setUser({ ...user, email: e.target.value });
      setErrors({ ...errors, emailError: "" });
    } else {
      const newError = { ...errors };
      newError.emailError = "Invalid Email";
      setErrors(newError);
      setUser({ ...user, email: "" });
    }
  };

  //handle password
  const handlePasswordChange = (e) => {
    const isValid = /.{6,}/.test(e.target.value);

    if (isValid) {
      setUser({ ...user, password: e.target.value });
      setErrors({ ...errors, passwordError: "" });
    } else {
      setErrors({ ...errors, passwordError: "Password Must be 6 characters" });
      setUser({ ...user, password: "" });
    }
  };

  //handle login
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const email = user.email;
    const password = user.password;
    console.log(email, password);
    signInWithEmailAndPassword(email, password).then((res) => {
      if (res?.user) {
        navigate(form, { replace: true });
      }
    });
  };

  return (
    <>
      <Menubar />
      <main className="h-fit  py-16 flex justify-center lg:pt-5 login-container mx-auto">
        <div className="w-[400px] rounded-md h-fit   bg-white border-2  mt-5 py-10 px-8">
          <h1 className=" text-xl text-center font-bold text-[#000002]">
            Login With Email
          </h1>

          <form onSubmit={handleLoginSubmit} className="w-full mt-12">
            <div className="mb-5">
              <input
                ref={emailRef}
                required
                name="email"
                onChange={handleEmailChange}
                className="w-full outline-none border-2 pl-5 rounded-xl py-3"
                type="email"
                placeholder="Email"
              />
              <p className="text-red-600 text-sm font-semibold mt-2">
                {" "}
                {errors.emailError}
              </p>
            </div>
            <div className="mb-5">
              <input
                required
                onChange={handlePasswordChange}
                name="password"
                className="w-full outline-none border-2 pl-5 rounded-xl py-3"
                type="password"
                placeholder="Password"
              />
              <p className="text-red-600 text-sm font-semibold mt-2">
                {" "}
                {errors.passwordError}
              </p>
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="shadow-gray-900 shadow-md text-white w-6/12 mx-auto  bg-[#5468FF] font-bold rounded-lg my-4 py-2 flex items-center justify-center"
              >
                Login
              </button>
            </div>
          </form>
          <div className="text-center">
            <p className="text-sm text-gray-900 font-semibold">
              Don't have a account?
              <button
                onClick={() => navigate("/register")}
                className="text-[#5468FF] font-bold"
              >
                Register
              </button>
            </p>
            <button
              onClick={() => {
                signInWithGoogle().then((res) => {
                  if (res.user) {
                    navigate(form, { replace: true });
                  }
                });
              }}
              className="shadow-gray-900 shadow-md text-[#5468FF] w-full hover:text-white hover:bg-[#5468FF] font-bold rounded-lg my-4 py-2 flex items-center justify-center"
            >
              Google Sign In
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Login;
