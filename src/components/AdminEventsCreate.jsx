import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { createEvent } from '../Api';
import NavBarAdmin from './NavBarAdmin';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/main.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    name: '',
    date: '',
    is_tournament: false,
  });

  const handleEventChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEventData({
      ...eventData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleEventSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createEvent(eventData);
      toast.success('Événement créé avec succès');
      console.log('Event created:', response);
    } catch (error) {
      toast.error("Erreur lors de la création de l'événement");
      console.error('Error creating event:', error);
    }
  };

  return (
    <div className="admin-page d-flex">
      <NavBarAdmin />
      <Container className="content-container p-4">
        <h2>Créer un nouvel événement</h2>
        <Form onSubmit={handleEventSubmit}>
          <Form.Group>
            <Form.Label>Nom</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nom de l'événement"
              name="name"
              value={eventData.name}
              onChange={handleEventChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={eventData.date}
              onChange={handleEventChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Check
              type="checkbox"
              label={<span style={{ color: 'black' }}>Tournoi</span>}
              name="is_tournament"
              checked={eventData.is_tournament}
              onChange={handleEventChange}
            />
          </Form.Group>
          <Button type="submit" className="btn btn-primary w-100">
            Créer l'événement
          </Button>
        </Form>
        <ToastContainer />
      </Container>
    </div>
  );
};

export default CreateEvent;
