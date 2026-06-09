import { useEffect } from "react";
import { useLoader } from "../context/LoaderContext";
import AboutUsMission from "../components/AboutUsMission";
import OurTeam from "../components/OurTeam";
import Brands from "../components/Brands";

function AboutUs() {
  const { useFakeLoader } = useLoader();
  useEffect(() => useFakeLoader(), []);

  return (
    <>
      <AboutUsMission />
      <OurTeam/>
      <Brands />
    </>
  );
}

export default AboutUs;
