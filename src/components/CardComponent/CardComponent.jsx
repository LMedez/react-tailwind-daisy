import React from "react";

function template() {
    console.log(this.props.value)
  return (
    <div class="card bg-orange-200 text-red-900 shadow-xl mt-6">
    <figure>
      <img
      class="object-fill h-48 w-96"
        src={this.props.value.background_image}
        alt="Shoes"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{this.props.value.name}</h2>
      <p>Released date: {this.props.value.released}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-error">Buy Now</button>
      </div>
    </div>
  </div>
  );
};

export default template;
