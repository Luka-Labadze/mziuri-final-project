import "react";
import ProductTable from "../components/ProductTable";

function Wishlist() {
  return (
    <div className="wishlist">
      <div className="productTableSection">
        <ProductTable mode="wishlist" />
      </div>
    </div>
  );
}

export default Wishlist;
