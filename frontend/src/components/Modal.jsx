import 'react';
import ReactDOM from 'react-dom';

function Modal({ children, isOpen, onClose }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="modal"
      onClick={onClose}
    >
      <div
        className="modal__content"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

export default Modal;
