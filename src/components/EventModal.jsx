import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const EventModal = ({ show, handleClose, event, handleShowRegister }) => {
  if (!event) return null;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{event.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={event.image} alt={event.title} className="img-fluid mb-3" />
        <p>{event.description}</p>
        <Button variant="primary" onClick={handleShowRegister}>
          S'inscrire
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default EventModal;
