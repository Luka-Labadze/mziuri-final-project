import React from 'react'
import ProductList from '../components/ProductList'
import FiltherSection from '../components/FiltherSection'


function Products() {
  return (
    <div className='productsWrapper'>
      <FiltherSection/>
      <ProductList />
    </div>
  )
}

export default Products