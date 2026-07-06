/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import ProductSingle from "./ProductSingle";
import Pagination from "./Pagination";
import { getProducts } from "../api/api";
import { Link } from "react-router-dom";

function ProductList({ sortOption, priceRange }) {
  const [products, setProducts] = useState();
  const [count, setCount] = useState(0);

  const [totalPages, setTotalPages] = useState();
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProducts();
      const allProducts = Array.isArray(data) ? data : data.products;

      const filtered = allProducts.filter(
        (item) => item.price >= priceRange.min && item.price <= priceRange.max,
      );

      const sorted = [...filtered].sort((a, b) => {
        switch (sortOption) {
          case "alphabetically":
            return a.title.localeCompare(b.title);
          case "alphabeticallyReverse":
            return b.title.localeCompare(a.title);
          case "priceLowToHigh":
            return a.price - b.price;
          case "priceHighToLow":
            return b.price - a.price;
          case "featured":
          default:
            return 0;
        }
      });

      const productsPerPage = 12;
      setTotalPages(Math.ceil(sorted.length / productsPerPage));

      const productsToShow = sorted.slice(
        (activePage - 1) * productsPerPage,
        activePage * productsPerPage,
      );
      setProducts(productsToShow);
    };
    fetchData().catch((err) => console.error("Error loading products:", err));
  }, [activePage, sortOption, priceRange]);

  useEffect(() => {
    if (products) setCount(products.length);
  }, [products]);

  useEffect(() => {
    setActivePage(1);
  }, [sortOption, priceRange]);

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

export default ProductList;
