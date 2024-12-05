import React from 'react';
import './Modal.css'; 

const Modal = ({ isOpen, onClose, member }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <img src={member.image} alt={member.name} className="member-image" />
          <h2>{member.name}</h2>
          <p className="profession">{member.profession}</p>
        </div>
        <p>{member.description}</p>
        <button onClick={onClose} className="close-button">Close</button>
      </div>
    </div>
  );
};

export default Modal;