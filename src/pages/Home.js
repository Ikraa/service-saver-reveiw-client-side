import React from "react";
import { useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Menubar from "../components/Menubar";
import Services from "./Services";

const Home = () => {
  const serviceData = useLoaderData();
  console.log(serviceData, "srvicedata");
  return (
    <div>
      <Menubar />
      <div>
        <div class="hero min-h-screen bg-base-200 banner-container">
          <div class="hero-content text-center">
            <div class="max-w-md">
              <h1 class="text-5xl font-bold text-white">Hello there</h1>
              <p class="py-6 text-white text-xl">
                We are organization to help you to develop your life and your
                life style . We have highly skillful training team. So the we
                provide our service at low rate, save time, 24 hour service
                anytime you want and more facilities.
              </p>
              <button class="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      <section className="w-[90%] mx-auto">
        <h1 className="underline mt-10  text-4xl text-gray-600 text-center">
          Services
        </h1>
        <Services serviceData={serviceData} />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
