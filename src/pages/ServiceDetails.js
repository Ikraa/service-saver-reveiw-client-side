import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../components/Footer";
import Menubar from "../components/Menubar";
import auth from "../firebase.config";

const ServiceDetails = () => {
  const [user, loading] = useAuthState(auth);
  const serviceDetails = useLoaderData();
  const [review, setReview] = useState([]);
  const loadReview = async () => {
    const res = await fetch(
      `https://service-saver.vercel.app/review/?serviceid=${serviceDetails?._id}`
    );
    const data = await res.json();
    setReview(data);
  };
  useEffect(() => {
    loadReview();
  }, []);
  const [inputValue, setInputValue] = useState({
    title: "",
    rating: "",
    desc: "",
    image: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.image) {
      return alert("Please provide photo url");
    }
    const data = {
      ...inputValue,
      email: user?.email,
      photo: user?.photoURL || inputValue?.image,
      userName: user?.displayName,
      serviceId: serviceDetails?._id,
      service: serviceDetails,
    };

    fetch("https://service-saver.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          loadReview();
          toast.success("Review submitted..");
          e.target.reset();
        }
      });
  };
  return (
    <div>
      <Menubar />
      <section>
        <h1 className="text-4xl underline text-center font-bold mt-8">
          About This Service
        </h1>
        <div>
          <div className="flex items-center  w-[80%] mx-auto h-[80vh]">
            <div className="grid grid-cols-2 ">
              <div className="mr-[30px] text-start">
                <h1 className="text-3xl font-bold">{serviceDetails?.name}</h1>
                {[...Array(+serviceDetails?.rating).keys()].map((item) => (
                  <i class="fa-sharp fa-solid fa-star text-[#F7AE09]"></i>
                ))}
                <h3 className="font-semibold text-lg mt-2">
                  Price: ${serviceDetails?.price}
                </h3>
                <p className="mt-2">{serviceDetails?.desc}</p>

                <div></div>
              </div>
              <img
                className="w-[100%] h-[300px] object-cover"
                src={
                  "https://f.hubspotusercontent00.net/hubfs/53/important-customer-service.jpg"
                }
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h1 className="text-4xl font-bold text-center underline ">
          Customer Review
        </h1>
        <div className="grid grid-cols-2">
          <div className="w-[90%] mx-auto">
            {user ? (
              <>
                <form className="flex flex-col my-10" onSubmit={handleSubmit}>
                  <input
                    required
                    className=" input-shadow  outline-none mb-3 border pl-5 py-3"
                    placeholder="Title"
                    name="title"
                    type="text"
                    onChange={(e) =>
                      setInputValue({ ...inputValue, title: e.target.value })
                    }
                    // {...register("name", { required: true })}
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
                    value={user?.email}
                    readOnly
                    placeholder="Your Email"
                    type="email"
                    // {...register("email")}
                  />

                  <input
                    required
                    className=" input-shadow border  outline-none mb-3 pl-5 py-3"
                    // placeholder="Enter price"
                    value={user?.displayName}
                    readOnly
                    type="text"
                    // {...register("price")}
                  />
                  <input
                    required
                    className=" input-shadow border  outline-none mb-3 pl-5 py-3"
                    placeholder="Please provide your image url"
                    onChange={(e) =>
                      setInputValue({ ...inputValue, image: e.target.value })
                    }
                    // value={user?.displayName}

                    // readOnly
                    type="text"
                    // {...register("price")}
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
              </>
            ) : (
              <h1 className="text-warning font-semibold text-3xl mt-10 text-center">
                !Please login to add a review....
              </h1>
            )}
          </div>
          <div className="grid grid-cols-2 gap-3 w-[90%] mx-auto mt-10">
            {review?.map((item) => (
              <div class="card  bg-base-200  shadow-3xl pt-3 h-[300px]">
                <figure className="mt-3">
                  <img
                    className="h-[50px] w-[50px] rounded-full object-cover"
                    src={item?.image}
                    alt="Shoes"
                  />
                </figure>

                <p className="text-center">
                  {" "}
                  {[...Array(+serviceDetails?.rating).keys()].map((item) => (
                    <i class="fa-sharp fa-solid fa-star text-[#F7AE09]"></i>
                  ))}
                </p>
                <p className="text-center">{item?.userName}</p>
                <div class="card-body">
                  <h2 class="card-title">{item?.title}</h2>
                  <p>
                    <strong>
                      <small className="text-gray-400">{item?.desc}</small>
                    </strong>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetails;
