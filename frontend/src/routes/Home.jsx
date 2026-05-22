import React, { useEffect, useState } from 'react'
import Carousel from '../components/Carousel'
import HotDeal from '../components/HotDeal'
import { useLoader } from '../context/LoaderContext';
import { fetchProducts } from '../api/api';

function Home() {
  const { useFakeLoader } = useLoader();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    useFakeLoader();

    fetchProducts()
      .then(data => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else if (data && Array.isArray(data.products)) {
          setProducts(data.products);
        }
      })
      .catch(err => console.error("Error loading home data:", err));
  }, [useFakeLoader]);

  return (
    <>
      <Carousel /> 
      <HotDeal products={products} />
    </>
  )
}

export default Home;