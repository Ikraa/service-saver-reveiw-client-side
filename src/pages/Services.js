import React, { Fragment, useState } from "react";

const Services = () => {
    const [show,setShow]=useState(false)
  const services = [
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
 <frameElement>
    <div className="grid grid-cols-3 gap-3 mt-10">
      { (!show?services.slice(0,6):services).map((item) => (
        <>
          <div class="card  bg-base-100 shadow-xl">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </>
      ))}
     
    </div>
     <div className="flex justify-center my-10">

     <button onClick={()=>setShow(!show)} className="w-[300px] btn btn-primary  mx-auto">{show?"See less":"See more"}</button>
     </div>
     </frameElement>
  );
};

export default Services;
