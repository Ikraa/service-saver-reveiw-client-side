import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Menubar from "../components/Menubar";
import ServiceItem from "./ServiceItem";

const ServicePage = () => {
  const [show, setShow] = useState(false);
  const services = useLoaderData();
  // console.log(ikara);
  // const  = [
  //   {
  //     id: 1,
  //     name: "10 days premium service",
  //     url: "https://f.hubspotusercontent00.net/hubfs/53/important-customer-service.jpg",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quae, deleniti ratione aut, explicabo odio, voluptatum molestias recusandae corporis omnis voluptatibus enim temporibus vitae accusamus ipsam! Quisquam minus odit in non. Quaerat id minima natus molestias saepe rem vitae recusandae, exercitationem sapiente quae explicabo eaque placeat deserunt voluptatem. Magnam, impedit.",
  //     price: 345,
  //     rating: 5,
  //   },
  //   {
  //     id: 2,
  //     name: "10 days premium service",
  //     url: "https://f.hubspotusercontent00.net/hubfs/53/important-customer-service.jpg",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quae, deleniti ratione aut, explicabo odio, voluptatum molestias recusandae corporis omnis voluptatibus enim temporibus vitae accusamus ipsam! Quisquam minus odit in non. Quaerat id minima natus molestias saepe rem vitae recusandae, exercitationem sapiente quae explicabo eaque placeat deserunt voluptatem. Magnam, impedit.",
  //     price: 345,
  //     rating: 5,
  //   },
  //   {
  //     id: 3,
  //     name: "10 days premium service",
  //     url: "https://f.hubspotusercontent00.net/hubfs/53/important-customer-service.jpg",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quae, deleniti ratione aut, explicabo odio, voluptatum molestias recusandae corporis omnis voluptatibus enim temporibus vitae accusamus ipsam! Quisquam minus odit in non. Quaerat id minima natus molestias saepe rem vitae recusandae, exercitationem sapiente quae explicabo eaque placeat deserunt voluptatem. Magnam, impedit.",
  //     price: 345,
  //     rating: 5,
  //   },
  //   {
  //     id: 4,
  //     name: "10 days premium service",
  //     url: "https://f.hubspotusercontent00.net/hubfs/53/important-customer-service.jpg",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quae, deleniti ratione aut, explicabo odio, voluptatum molestias recusandae corporis omnis voluptatibus enim temporibus vitae accusamus ipsam! Quisquam minus odit in non. Quaerat id minima natus molestias saepe rem vitae recusandae, exercitationem sapiente quae explicabo eaque placeat deserunt voluptatem. Magnam, impedit.",
  //     price: 345,
  //     rating: 5,
  //   },
  //   {
  //     id: 5,
  //     name: "10 days premium service",
  //     url: "https://f.hubspotusercontent00.net/hubfs/53/important-customer-service.jpg",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quae, deleniti ratione aut, explicabo odio, voluptatum molestias recusandae corporis omnis voluptatibus enim temporibus vitae accusamus ipsam! Quisquam minus odit in non. Quaerat id minima natus molestias saepe rem vitae recusandae, exercitationem sapiente quae explicabo eaque placeat deserunt voluptatem. Magnam, impedit.",
  //     price: 345,
  //     rating: 5,
  //   },
  //   {
  //     id: 6,
  //     name: "10 days premium service",
  //     url: "https://f.hubspotusercontent00.net/hubfs/53/important-customer-service.jpg",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quae, deleniti ratione aut, explicabo odio, voluptatum molestias recusandae corporis omnis voluptatibus enim temporibus vitae accusamus ipsam! Quisquam minus odit in non. Quaerat id minima natus molestias saepe rem vitae recusandae, exercitationem sapiente quae explicabo eaque placeat deserunt voluptatem. Magnam, impedit.",
  //     price: 345,
  //     rating: 5,
  //   },
  //   {
  //     id: 7,
  //     name: "10 days premium service",
  //     url: "https://f.hubspotusercontent00.net/hubfs/53/important-customer-service.jpg",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quae, deleniti ratione aut, explicabo odio, voluptatum molestias recusandae corporis omnis voluptatibus enim temporibus vitae accusamus ipsam! Quisquam minus odit in non. Quaerat id minima natus molestias saepe rem vitae recusandae, exercitationem sapiente quae explicabo eaque placeat deserunt voluptatem. Magnam, impedit.",
  //     price: 345,
  //     rating: 5,
  //   },
  //   {
  //     id: 8,
  //     name: "10 days premium service",
  //     url: "https://f.hubspotusercontent00.net/hubfs/53/important-customer-service.jpg",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quae, deleniti ratione aut, explicabo odio, voluptatum molestias recusandae corporis omnis voluptatibus enim temporibus vitae accusamus ipsam! Quisquam minus odit in non. Quaerat id minima natus molestias saepe rem vitae recusandae, exercitationem sapiente quae explicabo eaque placeat deserunt voluptatem. Magnam, impedit.",
  //     price: 345,
  //     rating: 5,
  //   },
  //   {
  //     id: 9,
  //     name: "10 days premium service",
  //     url: "https://f.hubspotusercontent00.net/hubfs/53/important-customer-service.jpg",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quae, deleniti ratione aut, explicabo odio, voluptatum molestias recusandae corporis omnis voluptatibus enim temporibus vitae accusamus ipsam! Quisquam minus odit in non. Quaerat id minima natus molestias saepe rem vitae recusandae, exercitationem sapiente quae explicabo eaque placeat deserunt voluptatem. Magnam, impedit.",
  //     price: 345,
  //     rating: 5,
  //   },
  // ];
  return (
    <div>
      <Menubar />
      <h1 className="underline mt-10 text-center  text-4xl text-gray-600">
        Services
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 mt-10 w-[90%] mx-auto">
        {services.map((item) => (
          <>
            <ServiceItem item={item} />
          </>
        ))}
      </div>
      <div className="flex justify-center my-10">
        {/* <button  className="w-[300px] btn btn-primary  mx-auto">{false?"See less":"See more"}</button> */}
      </div>
      <Footer />
    </div>
  );
};

export default ServicePage;
