import React, { useEffect } from 'react'
import SingleProductPage from '../components/SingleProductPage'
import { useLoader } from '../context/LoaderContext';

function SingleProduct() {
  const { useFakeLoader } = useLoader();
  useEffect(() => useFakeLoader(), []);
  return (
    <>  
      <SingleProductPage />
    </>
  )
}

export default SingleProduct