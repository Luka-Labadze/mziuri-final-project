import  { useEffect } from 'react';
import ProductList from '../components/ProductList';
import FilterSection from '../components/FilterSection';
import SortBy from '../components/SortBy';
import { useLoader } from '../context/LoaderContext';

function Products() {
  const { useFakeLoader } = useLoader();
  useEffect(() => useFakeLoader(), []);
  return (
    <div className="productsWrapper">
      <FilterSection />
      <div className="wrapper">
        <SortBy />
        <ProductList />
      </div>
    </div>
  );
}

export default Products;
