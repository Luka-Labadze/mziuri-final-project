import React from "react";
import ProductsData from "../data/productsData.json";
import ProductSingle from "./ProductSingle";

function ProductList() {
  return (
    <div className="productList">
      {ProductsData.products.map((item) => (
        <ProductSingle
          key={item.id}
          img1={item.images[0].src}
          img2={item.images[1].src}  
          title={item.title}
          price={item.variants[0].price}
          className="productSingleMap"
        />
      ))}
    </div>
  );
}

export default ProductList;
