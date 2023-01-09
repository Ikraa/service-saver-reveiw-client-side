import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useNavigate } from "react-router-dom";

const ServiceItem = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure className="cursor-pointer">
        <PhotoView src={item?.image}>
          <img
            className="h-[300px] object-cover"
            src={item?.image}
            alt="Shoes"
          />
        </PhotoView>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item?.name}</h2>
        <h2 className="card-title">${item?.price}</h2>
        <h2 className="card-title">Rating:{item?.rating}</h2>

        <p>{item?.desc?.slice(0, 150)}...</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => navigate(`/service/${item?._id}`)}
            className="btn btn-primary"
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
