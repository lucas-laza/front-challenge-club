import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import NavBar from './NavBar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/main.scss';
import bannerimg from '../assets/img/hero-banner.png';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Ajoutez votre logique de soumission de formulaire ici
  };

  return (
    <div className="contact-page">
      <header className="container my-5">
        <NavBar />
      </header>
      <Container>
        <Row className="align-items-center my-5">
          <Col md={6}>
            <img
              src={bannerimg}
              alt="Contact Illustration"
              className="img-fluid rounded"
            />
          </Col>
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Nom"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Prénom"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6} className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Col>
                <Col md={6} className="mb-3">
                  <Form.Control
                    type="tel"
                    placeholder="Téléphone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Titre du message"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Votre message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button type="submit" className="btn btn-primary w-100">
                Envoyer !
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default ContactPage;
