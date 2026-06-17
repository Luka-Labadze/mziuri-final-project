import "react";
import ProductTable from "../components/ProductTable";

function Cart() {
  return (
    <div className="Cart">
      <div className="productTableSection">
        <ProductTable mode="cart"/>
      </div>
    </div>
  );
}

export default Cart;
