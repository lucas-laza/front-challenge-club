import { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import NavBarAdmin from './NavBarAdmin';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/main.scss';
import { createNews, createEvent } from '../Api';

const AdminPage = () => {
  const [showArticleModal, setShowArticleModal] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);

  const [articleData, setArticleData] = useState({
    title: '',
    texte: '',
    date: '',
    image: null,
  });

  const [eventData, setEventData] = useState({
    name: '',
    date: '',
    is_tournament: false,
  });

  const handleArticleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setArticleData({
        ...articleData,
        image: files[0],
      });
    } else {
      setArticleData({
        ...articleData,
        [name]: value,
      });
    }
  };

  const handleEventChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEventData({
      ...eventData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleArticleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(articleData).forEach((key) => {
      formData.append(key, articleData[key]);
    });

    // Log the FormData content for debugging
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      const response = await createNews(formData);
      console.log('Article created:', response);
      setShowArticleModal(false);
    } catch (error) {
      console.error('Error creating article:', error);
    }
  };

  const handleEventSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createEvent(eventData);
      console.log('Event created:', response);
      setShowEventModal(false);
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <div className="admin-page d-flex flex-row">
      <NavBarAdmin/>
      <Container className='p-4'>
        {/* <Row className="my-5">
          <Col className="text-center">
            
            <Button
              variant="secondary"
              onClick={() => setShowEventModal(true)}
              className="ms-3">
              Créer un nouvel événement
            </Button>
          </Col>
        </Row> */}
        <div className='d-flex flex-column mt-3'>
          <div className='d-flex flex-row'>
            <input type="text" placeholder='Cherchez un article' className='form-control me-3' />
            <Button variant="primary" style={{whiteSpace: "nowrap"}} onClick={() => setShowArticleModal(true)}>
              Créer un nouvel article
            </Button>
          </div>
          <div>
          <table class="table mt-4">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </Container>

      <Modal show={showArticleModal} onHide={() => setShowArticleModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Créer un nouvel article</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleArticleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Titre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Titre de l'article"
                name="title"
                value={articleData.title}
                onChange={handleArticleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Texte</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Texte de l'article"
                name="texte"
                value={articleData.texte}
                onChange={handleArticleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={articleData.date}
                onChange={handleArticleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="file"
                name="image"
                onChange={handleArticleChange}
                required
              />
            </Form.Group>
            <Button type="submit" className="btn btn-primary w-100">
              Créer l'article
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={showEventModal} onHide={() => setShowEventModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Créer un nouvel événement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleEventSubmit}>
            <Form.Group className="mb-3">
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
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                value={eventData.date}
                onChange={handleEventChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
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
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AdminPage;
