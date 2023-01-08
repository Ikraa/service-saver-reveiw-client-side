import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Menubar from "../components/Menubar";
import SocialLogin from "./SocialLogin";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../firebase.config";

const Register = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
    confirmPasserror: "",
  });
  //handle name
  const handleNameChange = (e) => {
    setNewUser({ ...newUser, name: e.target.value });
  };
  //handle email
  const handleEmailChange = (e) => {
    const isValid = /\S+@\S+\.\S+/.test(e.target.value);
    if (isValid) {
      setNewUser({ ...newUser, email: e.target.value });
      setErrors({ ...errors, emailError: "" });
    } else {
      const newError = { ...errors };
      newError.emailError = "Invalid Email";
      setErrors(newError);
      setNewUser({ ...newUser, email: "" });
    }
  };

  //handle password
  const handlePasswordChange = (e) => {
    const isValid = /.{6,}/.test(e.target.value);

    if (isValid) {
      setNewUser({ ...newUser, password: e.target.value });
      setErrors({ ...errors, passwordError: "" });
    } else {
      setErrors({ ...errors, passwordError: "Password Must be 6 characters" });
      setNewUser({ ...newUser, password: "" });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(newUser.email, newUser.password);
    await updateProfile({ displayName: newUser.name });
  };
  //loading component

  if (loading) {
    return;
  }

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
      <Menubar />
      <main className=" h-fit py-16 flex justify-center lg:pt-5 login-container mx-auto">
        <div className="w-[400px] rounded-md h-fit   bg-white border-2  mt-5 py-10 px-8">
          {/* <Social /> */}

          <form onSubmit={handleRegister} className="w-full mt-12">
            <div className="mb-5">
              <input
                required
                onChange={handleNameChange}
                className="w-full outline-none border-2 pl-5 rounded-xl py-3"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="mb-5">
              <input
                ref={emailRef}
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
                onChange={handlePasswordChange}
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
              {errorElement}
              <button
                type="submit"
                className="shadow-gray-900 shadow-md text-white w-6/12 mx-auto  bg-[#5468FF] font-bold rounded-lg my-4 py-2 flex items-center justify-center"
              >
                Register
              </button>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-900 font-semibold">
                {" "}
                Have a account?
                <button
                  onClick={() => navigate("/login")}
                  className="text-[#5468FF] font-bold"
                >
                  Login
                </button>
              </p>

              <SocialLogin />
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Register;
