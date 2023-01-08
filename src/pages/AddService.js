import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import Footer from "../components/Footer";
import Menubar from "../components/Menubar";
import auth from "../firebase.config";

const AddService = () => {
  const [user] = useAuthState(auth);
  const [inputValue, setInputValue] = useState({
    name: "",
    rating: "",
    desc: "",
    image: "",
    price: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...inputValue,
      email: user?.email,
      photo: user?.photoURL,
      userName: user?.displayName,
    };
    fetch("http://localhost:5000/service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          e.target.reset();
        }
      });
  };
  return (
    <>
      <Menubar />
      <div className="flex justify-center items-center min-h-screen">
        <form className="flex flex-col my-10 w-[450px]" onSubmit={handleSubmit}>
          <input
            required
            className=" input-shadow  outline-none mb-3 border pl-5 py-3"
            placeholder="Enter name"
            name="name"
            type="text"
            onChange={(e) =>
              setInputValue({ ...inputValue, name: e.target.value })
            }
            // {...register("name", { required: true })}
          />
          <input
            required
            className=" input-shadow border  outline-none mb-3 pl-5 py-3"
            placeholder="Image url"
            onChange={(e) =>
              setInputValue({ ...inputValue, image: e.target.value })
            }
            // value={user?.displayName}

            // readOnly
            type="text"
            // {...register("price")}
          />
          <input
            required
            className=" input-shadow border  outline-none mb-3 pl-5 py-3"
            name="rating"
            onChange={(e) =>
              setInputValue({ ...inputValue, rating: e.target.value })
            }
            placeholder="Rating"
            type="number"
            // {...register("supplier", { required: true })}
          />

          <input
            required
            className=" input-shadow border  outline-none mb-3 pl-5 py-3"
            onChange={(e) =>
              setInputValue({ ...inputValue, price: e.target.value })
            }
            placeholder="Price"
            type="text"
            // {...register("email")}
          />

          <textarea
            required
            className=" input-shadow border  outline-none mb-3 pl-5 py-3"
            placeholder="Description"
            onChange={(e) =>
              setInputValue({ ...inputValue, desc: e.target.value })
            }
            name="desc"
            type="text"
            rows={8}
            // {...register("description")}
          />
          <input
            required
            className="  border border-[#332CF2] rounded hover:bg-[#332CF2] hover:text-white font-bold cursor-pointer pl-5 py-4"
            type="submit"
          />
        </form>
      </div>
      <Footer />
    </>
  );
};

export default AddService;
