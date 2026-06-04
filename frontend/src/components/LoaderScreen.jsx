import "react";
import { useLoader } from "../context/LoaderContext";

function LoaderScreen() {
  const { loading } = useLoader();

  return (
    <div className={`loaderScreen ${loading ? "fade-in" : "fade-out"}`}>
      <span className="loader"></span>
    </div>
  );
}

export default LoaderScreen;
