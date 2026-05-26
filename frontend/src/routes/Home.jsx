import React, { useEffect, useState } from 'react'
import Carousel from '../components/Carousel'
import HotDeal from '../components/HotDeal'
import { useLoader } from '../context/LoaderContext';
import { getProducts } from '../api/api';
import FeaturedProducts from '../components/FeaturedProducts';

function Home() {
  const { useFakeLoader } = useLoader();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    useFakeLoader();

    getProducts()
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
      <FeaturedProducts slides={products}/>
    </>
  )
}

export default Home;