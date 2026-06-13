import "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
function SingleCarousel({ title, img }) {
  const {t} = useTranslation()
  return (
    <div className="singleCarousel carousel-slide animated fadeIn active slide-visible">
      <div className="imgContainer">
        <img src={img} className="carouselImg" alt="product" />
      </div>
      <div className="textContainer">
        <h6>{t('Hero-Section-subtitle')}</h6>
        <h1 className="carouselTitle">{title}</h1>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It{" "}
          <br /> has roots in a piece of classical Latin literature.
        </p>
        <Link to="/products">
          <button className="carouselShopBtn">{t('Shop-Now-Btn')}</button>
        </Link>
      </div>
    </div>
  );
}

export default SingleCarousel;
