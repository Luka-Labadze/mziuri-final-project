import  { createContext, useContext, useState } from 'react';

const WishlistModalContext = createContext();

export const WishlistModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const openAddToWishlistModal = (productId) => {
    setSelectedId(productId);
    setIsOpen(true);
  };

  const closeAddToWishlistModal = () => {
    setIsOpen(false);
    setTimeout(() => setSelectedId(null), 300);
  };

  return (
    <WishlistModalContext.Provider
      value={{
        isOpen,
        selectedId,
        openAddToWishlistModal,
        closeAddToWishlistModal,
      }}
    >
      {children}
    </WishlistModalContext.Provider>
  );
};

export const useWishlistModal = () => useContext(WishlistModalContext);
