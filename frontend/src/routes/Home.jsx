import React, { useEffect } from 'react'
import Carousel from '../components/Carousel'
import HotDeal from '../components/HotDeal'
import LoaderScreen from '../components/LoaderScreen';
import { useLoader } from '../context/LoaderContext';

function Home() {
  const { useFakeLoader } = useLoader();
  useEffect(() => useFakeLoader(), []);
  return (
    <>
      <Carousel/>
      <HotDeal />
    </>
  )
}

export default Home