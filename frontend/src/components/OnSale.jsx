import "react";
import OnSaleFirstBanner from "../assets/staticImages/10028.jpg";
import onSaleSecondBanner from "../assets/staticImages/10029.jpg";
import OnSaleGrid from "./OnSaleGrid";
import { useEffect, useState } from "react";
import { getProducts } from "../api/api";

function OnSale() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts()
      .then((data) => {
        const productData = Array.isArray(data) ? data : data?.products || [];
        setProducts(productData);
      })
      .catch((err) => console.error("Error loading products:", err));
  }, []);
  return (
    <div className="onSale">
      <div className="onSaleBannerSection">
        <ul className="onSaleBannerWrapper">
          <li className="OSbannerItems">
            <img
              src={OnSaleFirstBanner}
              alt="onSaleBanners"
              className="onSaleBanners"
            />
          </li>
          <li className="OSbannerItems">
            <img
              src={onSaleSecondBanner}
              alt="onSaleBanners"
              className="onSaleBanners"
            />
          </li>
        </ul>
      </div>
      <div className="onSaleGridContainer">
        {products.slice(0, 2).map((product) => (
          <OnSaleGrid key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default OnSale;
