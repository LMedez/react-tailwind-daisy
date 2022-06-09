import React from "react";

function template(key) {
  return (
    <div class="card w-96 bg-orange-200 text-red-900 shadow-xl">
    <figure>
      <img
        src="https://api.lorem.space/image/shoes?w=400&h=225"
        alt="Shoes"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{key}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <button class="btn btn-error">Buy Now</button>
      </div>
    </div>
  </div>
  );
};

export default template;
