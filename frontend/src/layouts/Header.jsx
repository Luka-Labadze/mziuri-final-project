import "react";
import TopNavbar from "../components/TopNavbar";
import BottomNavbar from "../components/BottomNavbar";

function Header({ isLoggedIn }) {
  return (
    <>
      <TopNavbar />
      <BottomNavbar isLoggedIn={isLoggedIn}/>
    </>
  );
}

export default Header;
