/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import ProductSingle from "./ProductSingle";
import Pagination from "./Pagination";
import { getProducts } from "../api/api";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState();
  const [count, setCount] = useState(0);

  const [totalPages, setTotalPages] = useState();
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      const allProducts = Array.isArray(data) ? data : data.products;

      const productsPerPage = 12;
      setTotalPages(Math.ceil(allProducts.length / productsPerPage));

      const productsToShow = allProducts.slice(
        (activePage - 1) * productsPerPage,
        activePage * productsPerPage,
      );
      setProducts(productsToShow);
    };
    fetchData().catch((err) => console.error("Error loading products:", err));
  }, [activePage]);

  useEffect(() => {
    if (products) setCount(products.length);
  }, [products]);

  return (
    <div className="productListWrapper">
      {!products ? (
        <div>loading...</div>
      ) : products.length === 0 ? (
        <div>no products to show</div>
      ) : (
        <>
          <div className="productList">
            {products.map((item) => (
              <Link
                key={item._id}
                to={`/single-product/${item._id}`}
                style={{ textDecoration: "none" }}
              >
                <ProductSingle
                  id={item._id}
                  img1={item.image1}
                  img2={item.image2}
                  title={item.title}
                  price={item.price}
                  className="productSingleMap"
                />
              </Link>
            ))}
          </div>
          <Pagination
            totalPages={totalPages}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        </>
      )}
    </div>
  );
}

export default ProductList