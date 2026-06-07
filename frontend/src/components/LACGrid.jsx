import "react";
import { Link } from "react-router-dom";
function LACGrid({ product }) {
  return (
    <div className="lacGrid">
      <Link
        to={`/single-product/${product._id}`}
        style={{ textDecoration: "none" }}
      >
        <img src={product.image1} alt={1234} className="lacGridImg" />
      </Link>
      <div className="lacGridInfo">
        <h4 className="lacGridTitle">{product.title}</h4>
        <p className="lacGridPrice">${product.price}</p>
      </div>
    </div>
  );
}

export default LACGrid;
