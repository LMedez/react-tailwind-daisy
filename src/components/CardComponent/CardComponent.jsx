import React from "react";

function template(key) {
    console.log(this.props.value.thumbnail)
  return (
    <div class="card w-96 bg-orange-200 text-red-900 shadow-xl mt-6">
    <figure>
      <img
      class="object-fill h-48 w-96"
        src={this.props.value.thumbnail}
        alt="Shoes"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{this.props.value.title}</h2>
      <p>{this.props.value.short_description}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-error">Buy Now</button>
      </div>
    </div>
  </div>
  );
};

export default template;
