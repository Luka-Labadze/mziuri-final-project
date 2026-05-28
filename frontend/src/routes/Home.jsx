import React, { use, useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import HotDeal from "../components/HotDeal";
import { useLoader } from "../context/LoaderContext";
import { getProducts } from "../api/api";
import FeaturedProducts from "../components/FeaturedProducts";
import Banner from "../components/Banner";
import { useParams } from "react-router-dom";
import NewsletterModal from "../modals/NewsletterModal";

function Home() {
  const params = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { useFakeLoader } = useLoader();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    useFakeLoader();

    getProducts()
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else if (data && Array.isArray(data.products)) {
          setProducts(data.products);
        }
      })
      .catch((err) => console.error("Error loading home data:", err));
  }, [useFakeLoader]);


useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <NewsletterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
      <Carousel />
      <HotDeal products={products} />
      <FeaturedProducts slides={products} />
      <Banner />
    </>
  );
}

export default Home;
