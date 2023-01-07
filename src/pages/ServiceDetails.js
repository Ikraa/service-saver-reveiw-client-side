import React from "react";
import Footer from "../components/Footer";
import Menubar from "../components/Menubar";

const ServiceDetails = () => {
  return (
    <div>
      <Menubar />
      <section>
        <h1 className="text-4xl underline text-center font-bold mt-8">About This Service</h1>
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

                <div>
                 
                </div>
              </div>
              <img
                className="w-[100%] h-[300px] object-cover"
                src={"https://f.hubspotusercontent00.net/hubfs/53/important-customer-service.jpg"}
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
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetails;
