import React from 'react';

const ServiceItem = ({item}) => {
    return (
        <div class="card  bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{item?.name}</h2>
          <h2 class="card-title">${item?.price}</h2>
          <h2 class="card-title">Rating:{item?.rating}</h2>

          <p>{item?.desc}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">View</button>
          </div>
        </div>
      </div>
    );
};

export default ServiceItem;