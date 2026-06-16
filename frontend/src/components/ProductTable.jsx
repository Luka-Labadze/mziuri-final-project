import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
function ProductTable() {
  const { t } = useTranslation();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(stored);
  }, []);

  const handleRemove = (id) => {
    const updated = cartItems.filter((p) => p._id !== id);
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  if (!cartItems.length) {
    return (
      <div className="EmptyCart">
        <h2 className="SC">Shopping Cart</h2>
        <h3 className="CartIsEmpty">Your cart is currently empty.</h3>
        <Link to="/products" style={{ textDecoration: "none" }}>
          <p className="CBH">Continue browsing here</p>
        </Link>
      </div>
    );
  }
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  return (
    <section className="productTable">
      <div className="tableWrapper">
        <ul className="tableHeader">
          <li className="headerCell">{t("Image")}</li>
          <li className="headerCell">{t("Product")}</li>
          <li className="headerCell">{t("Price")}</li>
          <li className="headerCell">{t("Quantity")}</li>
          <li className="headerCell">{t("Total")}</li>
          <li className="headerCell">{t("Remove")}</li>
        </ul>

        <ul className="productList">
          {cartItems.map((item) => (
            <li key={item._id} className="productRow">
              <div className="imageCell">
                <img
                  src={item.image1}
                  alt={item.title}
                  className="productImage"
                />
              </div>

              <div className="infoCell">
                <span className="productName">{item.title}</span>
              </div>

              <div className="priceCell">${item.price}</div>

              <div className="quantityCell">
                <div className="qtyControl">
                  <button className="qtyBtn">−</button>
                  <span className="qtyValue">1</span>
                  <button className="qtyBtn">+</button>
                </div>
              </div>

              <div className="totalCell">${item.price}</div>

              <div className="removeCell">
                <button
                  className="removeBtn"
                  onClick={() => handleRemove(item._id)}
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="cartFooter">
        <div className="cartActions">
          <button className="cartActionBtn">{t("Update Cart")}</button>
          <Link to="/products">
            <button className="cartActionBtn">{t("Continue Shopping")}</button>
          </Link>
        </div>

        <div className="cartTotals">
          <h3 className="cartTotalsTitle">{t("Cart Totals")}</h3>
          <div className="totalsRow">
            <span className="totalsLabel">{t("Subtotal")}</span>
            <span className="totalsValue">${subtotal.toFixed(2)}</span>
          </div>
          <div className="totalsRow totalBold">
            <span className="totalsLabel">{t("Total")}</span>
            <span className="totalsValue">${subtotal.toFixed(2)}</span>
          </div>
          <Link to="/checkout">
            <button className="checkoutBtn">{t("Proceed to Checkout")}</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProductTable;
