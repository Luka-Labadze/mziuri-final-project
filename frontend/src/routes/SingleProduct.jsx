import React, { useEffect } from "react";
import SingleProductPage from "../components/SingleProductPage";
import { useLoader } from "../context/LoaderContext";
import Description from "../components/Description";
import RecentlyViewed from "../components/RecentlyViewed";

function SingleProduct() {
  const { useFakeLoader } = useLoader();
  useEffect(() => useFakeLoader(), []);
  return (
    <>
      <SingleProductPage />
      <Description />
      <RecentlyViewed />
    </>
  );
}

export default SingleProduct;
