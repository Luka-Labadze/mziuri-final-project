import "react";
import FirstBanner from "../assets/staticImages/10024.jpg";
import SecondBanner from "../assets/staticImages/10025.jpg";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <div className="banner">
      <div className="bannerWrapper">
        <div className="imageContainer">
          <Link to="/products">
            <img src={FirstBanner} alt="firstbanner" className="banners" />
          </Link>
        </div>
        <div className="imageContainer">
          <Link to="/products">
            <img src={SecondBanner} alt="secondbanner" className="banners" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
