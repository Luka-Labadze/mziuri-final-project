import React from "react";

function SingleCarousel({title, img, subtitle1, subtitle2}) {
  return (
    <div>
      <img src={img}/>
      <h4>{subtitle1}</h4>
      <h1>{title}</h1>
      <p>
        {subtitle2}
      </p>
      <button>Shop Now</button>
    </div>
  );
}

export default SingleCarousel;
