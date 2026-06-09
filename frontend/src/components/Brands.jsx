import "react";
import BrandImg1 from "../assets/staticImages/BR1.webp";
import BrandImg2 from "../assets/staticImages/BR2.webp";
import BrandImg3 from "../assets/staticImages/BR3.webp";
import BrandImg4 from "../assets/staticImages/BR4.webp";
import BrandImg5 from "../assets/staticImages/BR5.webp";

function Brands() {
  return (
    <div className="brands">
      <ul className="brandsWrapper">
        <li className="brandItems">
          <img src={BrandImg1} className="brandImages" />
        </li>
        <li className="brandItems">
          <img src={BrandImg2} className="brandImages" />
        </li>
        <li className="brandItems">
          <img src={BrandImg3} className="brandImages" />
        </li>
        <li className="brandItems">
          <img src={BrandImg4} className="brandImages" />
        </li>
        <li className="brandItems">
          <img src={BrandImg5} className="brandImages" />
        </li>
      </ul>
    </div>
  );
}

export default Brands;
