import React, { Fragment, useState } from "react";
import ServiceItem from "./ServiceItem";

const Services = ({ serviceData }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-3 mt-10">
        {(!show && serviceData?.length > 3
          ? serviceData.slice(0, 3)
          : serviceData
        ).map((item) => (
          <>
            <ServiceItem item={item} />
          </>
        ))}
      </div>
      <div className="flex justify-center my-10">
        <button
          onClick={() => setShow(!show)}
          className="w-[300px] btn btn-primary  mx-auto"
        >
          {show ? "See less" : "See more"}
        </button>
      </div>
    </>
  );
};

export default Services;
