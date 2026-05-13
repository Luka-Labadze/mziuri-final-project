import React, { useEffect } from 'react'
import ProductList from '../components/ProductList'
import FiltherSection from '../components/FiltherSection'
import SortBy from '../components/SortBy'
import { useLoader } from '../context/LoaderContext';


function Products() {
  const { useFakeLoader } = useLoader();
  useEffect(() => useFakeLoader(), []);
  return (
    <div className='productsWrapper'>
      <FiltherSection/>
      <div className="wrapper">
      <SortBy/>
      <ProductList />
      </div>
    </div>
  )
}

export default Products