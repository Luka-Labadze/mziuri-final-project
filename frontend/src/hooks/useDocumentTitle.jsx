import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useDocumentTitle = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    switch (pathname) {
      case "/":
        document.title = "Home - Ponno";
        break;
      case "/about":
        document.title = "About Us - Ponno";
        break;
      case "/contact":
        document.title = "Contact Us - Ponno";
        break;
      case "/login":
        document.title = "Login - Ponno";
        break;
      case "/register":
        document.title = "Create Account - Ponno";
        break;
      case "/products":
        document.title = "Shop - Ponno";
        break;
      case (pathname.match(/\/products\/.+/) || {}).input:
        document.title = "Product Details - Ponno";
        break;
      default:
        document.title = "Single Product Details - Ponno";
    }
  }, [pathname]);
};

export default useDocumentTitle;
