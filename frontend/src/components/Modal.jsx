import React from "react";
import ReactDOM from "react-dom";
import ModalCloseBtn from "../assets/icons/X.svg";

function Modal({ children, isOpen, onClose }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal" onClick={onClose}>
      <div 
        className="modal__content" 
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={ModalCloseBtn}
          alt="close"
          onClick={onClose}
          className="modal__content__close"
          
        />
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default Modal;