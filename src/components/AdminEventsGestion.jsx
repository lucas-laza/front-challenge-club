import { useState, useEffect } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';
import { getAllEvents, deleteEvent, updateEvent } from '../Api';
import NavBarAdmin from './NavBarAdmin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminEventsGestion = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await getAllEvents();
      setEvents(response);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleDelete = async (id) => {
    if (!id) {
      console.error('ID is undefined');
      return;
    }

    try {
      await deleteEvent(id);
      toast.error('Événement supprimé avec succès', {
        className: 'toast-red',
      });
      fetchEvents();
    } catch (error) {
      toast.error("Erreur lors de la suppression de l'événement", {
        className: 'toast-red',
      });
      console.error('Error deleting event:', error);
    }
  };

  const handleEditClick = (event) => {
    if (!event || !event._id) {
      console.error('Event or Event ID is undefined');
      return;
    }

    setCurrentEvent(event);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setCurrentEvent(null);
  };

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    if (!currentEvent || !currentEvent._id) {
      console.error('Current Event or Event ID is undefined');
      return;
    }

    try {
      await updateEvent(currentEvent._id, currentEvent);
      toast.warning('Événement modifié avec succès', {
        className: 'toast-yellow',
      });
      fetchEvents();
      handleModalClose();
    } catch (error) {
      toast.error("Erreur lors de la modification de l'événement", {
        className: 'toast-red',
      });
      console.error('Error updating event:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCurrentEvent({
      ...currentEvent,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div className="admin-page d-flex">
      <NavBarAdmin />
      <Container className="content-container p-4">
        <h2>Gérer les Événements</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nom</th>
              <th>Date</th>
              <th>Tournoi</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={event._id}>
                <td>{index + 1}</td>
                <td>{event.name}</td>
                <td>{new Date(event.date).toLocaleDateString()}</td>
                <td>{event.is_tournament ? 'Oui' : 'Non'}</td>
                <td>
                  <Button
                    variant="warning"
                    className="me-2"
                    onClick={() => handleEditClick(event)}>
                    Modifier
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(event._id)}>
                    Supprimer
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Modal show={showModal} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modifier l'événement</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {currentEvent && (
              <Form onSubmit={handleModalSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nom de l'événement"
                    name="name"
                    value={currentEvent.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="date"
                    value={
                      new Date(currentEvent.date).toISOString().split('T')[0]
                    }
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Check
                    type="checkbox"
                    label="Tournoi"
                    name="is_tournament"
                    checked={currentEvent.is_tournament}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button type="submit" className="btn btn-primary w-100">
                  Modifier l'événement
                </Button>
              </Form>
            )}
          </Modal.Body>
        </Modal>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default AdminEventsGestion;
