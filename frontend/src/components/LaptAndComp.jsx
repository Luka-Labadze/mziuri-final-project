import "react";
import { useEffect, useState } from "react";
import { getProducts } from "../api/api";
import LACGrid from "./LACGrid";
import { useTranslation } from "react-i18next";

function LaptAndComp() {
  const [products, setProducts] = useState([]);
  const {t} = useTranslation()
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
        <h5 className="laptAndCompTitle">{t("Laptops-Computers")}</h5>
        <ul className="titleSectionRightWrap">
          <li className="titleSectionRight" id="TSRActive">{t("Featured")}</li>
          <li className="titleSectionRight">{t("New-Product")}</li>
          <li className="titleSectionRight">{t("Best-Deal")}</li>
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
