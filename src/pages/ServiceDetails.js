import React from "react";
import Footer from "../components/Footer";
import Menubar from "../components/Menubar";

const ServiceDetails = () => {
  const reviews = [
    {
      id: 1,
      name: "10 days premium service",
      url: "https://f.hubspotusercontent00.net/hubfs/53/important-customer-service.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quae, deleniti ratione aut, explicabo odio, voluptatum molestias recusandae corporis omnis voluptatibus enim temporibus vitae accusamus ipsam! Quisquam minus odit in non. Quaerat id minima natus molestias saepe rem vitae recusandae, exercitationem sapiente quae explicabo eaque placeat deserunt voluptatem. Magnam, impedit.",
      price: 345,
      rating: 5,
    },
    {
      id: 2,
      name: "10 days premium service",
      url: "https://f.hubspotusercontent00.net/hubfs/53/important-customer-service.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quae, deleniti ratione aut, explicabo odio, voluptatum molestias recusandae corporis omnis voluptatibus enim temporibus vitae accusamus ipsam! Quisquam minus odit in non. Quaerat id minima natus molestias saepe rem vitae recusandae, exercitationem sapiente quae explicabo eaque placeat deserunt voluptatem. Magnam, impedit.",
      price: 345,
      rating: 5,
    },
    {
      id: 3,
      name: "10 days premium service",
      url: "https://f.hubspotusercontent00.net/hubfs/53/important-customer-service.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quae, deleniti ratione aut, explicabo odio, voluptatum molestias recusandae corporis omnis voluptatibus enim temporibus vitae accusamus ipsam! Quisquam minus odit in non. Quaerat id minima natus molestias saepe rem vitae recusandae, exercitationem sapiente quae explicabo eaque placeat deserunt voluptatem. Magnam, impedit.",
      price: 345,
      rating: 5,
    },
    {
      id: 4,
      name: "10 days premium service",
      url: "https://f.hubspotusercontent00.net/hubfs/53/important-customer-service.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quae, deleniti ratione aut, explicabo odio, voluptatum molestias recusandae corporis omnis voluptatibus enim temporibus vitae accusamus ipsam! Quisquam minus odit in non. Quaerat id minima natus molestias saepe rem vitae recusandae, exercitationem sapiente quae explicabo eaque placeat deserunt voluptatem. Magnam, impedit.",
      price: 345,
      rating: 5,
    },
    {
      id: 5,
      name: "10 days premium service",
      url: "https://f.hubspotusercontent00.net/hubfs/53/important-customer-service.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quae, deleniti ratione aut, explicabo odio, voluptatum molestias recusandae corporis omnis voluptatibus enim temporibus vitae accusamus ipsam! Quisquam minus odit in non. Quaerat id minima natus molestias saepe rem vitae recusandae, exercitationem sapiente quae explicabo eaque placeat deserunt voluptatem. Magnam, impedit.",
      price: 345,
      rating: 5,
    },
    {
      id: 6,
      name: "10 days premium service",
      url: "https://f.hubspotusercontent00.net/hubfs/53/important-customer-service.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quae, deleniti ratione aut, explicabo odio, voluptatum molestias recusandae corporis omnis voluptatibus enim temporibus vitae accusamus ipsam! Quisquam minus odit in non. Quaerat id minima natus molestias saepe rem vitae recusandae, exercitationem sapiente quae explicabo eaque placeat deserunt voluptatem. Magnam, impedit.",
      price: 345,
      rating: 5,
    },
    {
      id: 7,
      name: "10 days premium service",
      url: "https://f.hubspotusercontent00.net/hubfs/53/important-customer-service.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quae, deleniti ratione aut, explicabo odio, voluptatum molestias recusandae corporis omnis voluptatibus enim temporibus vitae accusamus ipsam! Quisquam minus odit in non. Quaerat id minima natus molestias saepe rem vitae recusandae, exercitationem sapiente quae explicabo eaque placeat deserunt voluptatem. Magnam, impedit.",
      price: 345,
      rating: 5,
    },
    {
      id: 8,
      name: "10 days premium service",
      url: "https://f.hubspotusercontent00.net/hubfs/53/important-customer-service.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quae, deleniti ratione aut, explicabo odio, voluptatum molestias recusandae corporis omnis voluptatibus enim temporibus vitae accusamus ipsam! Quisquam minus odit in non. Quaerat id minima natus molestias saepe rem vitae recusandae, exercitationem sapiente quae explicabo eaque placeat deserunt voluptatem. Magnam, impedit.",
      price: 345,
      rating: 5,
    },
    {
      id: 9,
      name: "10 days premium service",
      url: "https://f.hubspotusercontent00.net/hubfs/53/important-customer-service.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quae, deleniti ratione aut, explicabo odio, voluptatum molestias recusandae corporis omnis voluptatibus enim temporibus vitae accusamus ipsam! Quisquam minus odit in non. Quaerat id minima natus molestias saepe rem vitae recusandae, exercitationem sapiente quae explicabo eaque placeat deserunt voluptatem. Magnam, impedit.",
      price: 345,
      rating: 5,
    },
  ];
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
              <div className="mr-[30px] text-right">
                <h1 className="text-3xl font-bold">{"course.title"}</h1>
                <h3 className="font-semibold text-lg mt-2">
                  {"course?.headline"}
                </h3>
                <p className="mt-2">{"course?.description"}</p>
                {[...Array(3).keys()].map((item) => (
                  <i class="fa-sharp fa-solid fa-star text-[#F7AE09]"></i>
                ))}

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
          <div></div>
          <div className="grid grid-cols-2 gap-3 w-[90%] mx-auto mt-10">
            {reviews?.map((item) => (
              <div class="card  bg-base-100 shadow-xl">
                <figure>
                  <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">
                    Shoes!
                    <div class="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-end">
                    <div class="badge badge-outline">Fashion</div>
                    <div class="badge badge-outline">Products</div>
                  </div>
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
