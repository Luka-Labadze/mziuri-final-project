import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import FilterSection from "../components/FilterSection";
import SortBy from "../components/SortBy";
import { useLoader } from "../context/LoaderContext";

function Products() {
  const { useFakeLoader } = useLoader();
  const [sortOption, setSortOption] = useState("alphabeticallyReverse");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 150 });

  useEffect(() => useFakeLoader(), []);

  return (
    <div className="productsWrapper">
      <FilterSection priceRange={priceRange} setPriceRange={setPriceRange} />
      <div className="wrapper">
        <SortBy sortOption={sortOption} setSortOption={setSortOption} />
        <ProductList sortOption={sortOption} priceRange={priceRange} />
      </div>
    </div>
  );
}

export default Products;
