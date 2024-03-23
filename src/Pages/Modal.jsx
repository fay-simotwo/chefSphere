import { createPortal } from "react-dom";
import { HiX } from "react-icons/hi";
import React, { useState } from "react";

function Modal({ children, onClose, onSave, chef }) {
  const [editedChef, setEditedChef] = useState(chef);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedChef({
      ...editedChef,
      [name]: value,
    });
  };

  const handleSave = () => {
    onSave(editedChef);
    onClose(); 
  };

  return createPortal(
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="bg-gray-300 bg-opacity-50 backdrop-filter backdrop-blur-md absolute inset-0"></div>
      <div className="bg-white rounded-lg shadow-lg p-8 overflow-scroll max-h-[80vh] sm:max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 p-1 rounded-sm hover:bg-gray-100 transition duration-200"
        >
          <HiX className="w-6 h-6 text-gray-500" />
        </button>
        
        <div className="mt-4">{children}</div>
        
      </div>
    </div>,
    document.body
  );
}

export default Modal;
