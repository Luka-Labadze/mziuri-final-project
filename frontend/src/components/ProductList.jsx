import React, { useEffect, useState } from "react";
import ProductSingle from "./ProductSingle";
import { getProducts } from "../api/api";
import { Link } from 'react-router-dom'
function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        const productData = Array.isArray(data) ? data : data.products;
        setProducts(productData);
      })
      .catch((err) => console.error("Error loading products:", err));
  }, []);
  return (
   <div className="productList">
      {products.map((item) => (
        <Link key={item._id} to={`/single-product/${item._id}`} style={{textDecoration: 'none'}}>
          <ProductSingle
            img1={item.image1}
            img2={item.image2}
            title={item.title}
            price={item.price}
            className="productSingleMap"
          />
        </Link>
      ))}
    </div>
  );
}

export default ProductList;
