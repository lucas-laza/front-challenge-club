// RegisterModal.jsx

import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { addUserToEvent } from '../Api';

const RegisterModal = ({ show, handleClose, event }) => {
  const [formData, setFormData] = useState({
    name: '',
    last_name: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addUserToEvent(event._id, formData);
      console.log('User added to event:', response);
      handleClose();
    } catch (error) {
      console.error('Error adding user to event:', error);
      // Handle error state or show error message to user
    }
  };

  if (!event) return null;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Inscription à {event.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label className='fw-bold text-dark'>Nom</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formLastName">
            <Form.Label className='fw-bold text-dark'>Prénom</Form.Label>
            <Form.Control
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            S'inscrire
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default RegisterModal;
