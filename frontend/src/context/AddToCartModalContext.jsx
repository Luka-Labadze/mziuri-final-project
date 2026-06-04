import  { createContext, useContext, useState } from 'react';

const CartModalContext = createContext();

export const CartModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const openAddToCartModal = (productId) => {
    setSelectedId(productId);
    setIsOpen(true);
  };

  const closeAddToCartModal = () => {
    setIsOpen(false);
    setTimeout(() => setSelectedId(null), 300);
  };

  return (
    <CartModalContext.Provider
      value={{
        isOpen,
        selectedId,
        openAddToCartModal,
        closeAddToCartModal,
      }}
    >
      {children}
    </CartModalContext.Provider>
  );
};

export const useCartModal = () => useContext(CartModalContext);
