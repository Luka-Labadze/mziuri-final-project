import  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api/api.js';
import SingleProductPage from '../components/SingleProductPage';
import { useLoader } from '../context/LoaderContext';
import Description from '../components/Description';
import RecentlyViewed from '../components/RecentlyViewed';

function SingleProduct() {
  const { useFakeLoader } = useLoader();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    useFakeLoader();
    if (!id) return;

    getProductById(id)
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!product) {
    return <div className="loading">Loading product...</div>;
  }

  return (
    <>
      <SingleProductPage product={product} />
      <Description />
      <RecentlyViewed />
    </>
  );
}

export default SingleProduct;
