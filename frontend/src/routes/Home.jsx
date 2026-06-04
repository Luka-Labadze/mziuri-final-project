import { useEffect, useState } from "react";
import { useLoader } from "../context/LoaderContext";
import Carousel from "../components/Carousel";
import { getProducts } from "../api/api";
import HotDeal from "../components/HotDeal";
import FeaturedProducts from "../components/FeaturedProducts";
import Banner from "../components/Banner";
import NewsletterModal from "../modals/NewsletterModal";
import CartModal from "../modals/CartModal";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { useFakeLoader } = useLoader();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    useFakeLoader();
    getProducts()
      .then((data) => {
        const productData = Array.isArray(data) ? data : data?.products || [];
        setProducts(productData);
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
      <NewsletterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <Carousel />
      <HotDeal products={products} />
      <FeaturedProducts slides={products} />
      <Banner />
      < CartModal/>
    </>
  );
}

export default Home;
