import { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { createNews } from '../Api';
import NavBarAdmin from './NavBarAdmin';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/main.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminNewsCreate = () => {
  const [articleData, setArticleData] = useState({
    title: '',
    texte: '',
    date: '',
    image: null,
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
      toast.success('Article créé avec succès');
      console.log('Article created:', response);
    } catch (error) {
      toast.error("Erreur lors de la création de l'article");
      console.error('Error creating article:', error);
    }
  };

  return (
    <div className="admin-page d-flex">
      <NavBarAdmin />
      <Container className="content-container p-4">
        <h2>Créer un nouvel article</h2>
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
        <ToastContainer />
      </Container>
    </div>
  );
};

export default AdminNewsCreate;
