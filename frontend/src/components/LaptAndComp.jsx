import "react";
import { useEffect, useState } from "react";
import { getProducts } from "../api/api";
import LACGrid from "./LACGrid";

function LaptAndComp() {
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
    <div className="laptAndComp">
      <div className="titleSection">
        <h5 className="laptAndCompTitle">Laptops & Computers</h5>
        <ul className="titleSectionRightWrap">
          <li className="titleSectionRight" id="TSRActive">Featured</li>
          <li className="titleSectionRight">New Product</li>
          <li className="titleSectionRight">Best Deal</li>
        </ul>
      </div>
      <div className="laptAndCompGrid">
        {products.slice(0, 9).map((product) => (
          <LACGrid key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default LaptAndComp;
