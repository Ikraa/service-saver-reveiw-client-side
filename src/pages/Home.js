import React from "react";
import Menubar from "../components/Menubar";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Menubar />
      <div>
        <div class="hero min-h-screen bg-base-200 banner-container">
          <div class="hero-content text-center">
            <div class="max-w-md">
              <h1 class="text-5xl font-bold text-white">Hello there</h1>
              <p class="py-6 text-white">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button class="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      <section className="w-[90%] mx-auto">
        <h1 className="underline mt-10  text-4xl text-gray-600">Services</h1>
        <Services />
      </section>
    </div>
  );
};

export default Home;
