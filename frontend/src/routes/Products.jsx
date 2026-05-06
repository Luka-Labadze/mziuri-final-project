import React from 'react'
import ProductList from '../components/ProductList'
import FiltherSection from '../components/FiltherSection'
import SortBy from '../components/SortBy'


function Products() {
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