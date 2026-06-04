import  { useEffect } from 'react';
import { useLoader } from '../context/LoaderContext';

function AboutUs() {
  const { useFakeLoader } = useLoader();
  useEffect(() => useFakeLoader(), []);
  return <div>AboutUs</div>;
}

export default AboutUs;
