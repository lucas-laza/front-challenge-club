import { useState, useEffect } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';
import { getAllNews, deleteNews, updateNews } from '../Api';
import NavBarAdmin from './NavBarAdmin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminNewsGestion = () => {
  const [news, setNews] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentNews, setCurrentNews] = useState(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await getAllNews();
      setNews(response);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const handleDelete = async (id) => {
    if (!id) {
      console.error('ID is undefined');
      return;
    }

    try {
      await deleteNews(id);
      toast.error('Article supprimé avec succès', {
        className: 'toast-red',
      });
      fetchNews();
    } catch (error) {
      toast.error("Erreur lors de la suppression de l'article", {
        className: 'toast-red',
      });
      console.error('Error deleting news:', error);
    }
  };

  const handleEditClick = (newsItem) => {
    if (!newsItem || !newsItem._id) {
      console.error('News or News ID is undefined');
      return;
    }

    setCurrentNews(newsItem);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setCurrentNews(null);
  };

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    if (!currentNews || !currentNews._id) {
      console.error('Current News or News ID is undefined');
      return;
    }

    const formData = new FormData();
    Object.keys(currentNews).forEach((key) => {
      formData.append(key, currentNews[key]);
    });

    try {
      await updateNews(currentNews._id, formData);
      toast.warning('Article modifié avec succès', {
        className: 'toast-yellow',
      });
      fetchNews();
      handleModalClose();
    } catch (error) {
      toast.error("Erreur lors de la modification de l'article", {
        className: 'toast-red',
      });
      console.error('Error updating news:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setCurrentNews({
      ...currentNews,
      [name]: type === 'checkbox' ? checked : files ? files[0] : value,
    });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) {
      return 'N/A';
    }
    return date.toLocaleDateString();
  };

  return (
    <div className="admin-page d-flex">
      <NavBarAdmin />
      <Container className="content-container p-4">
        <h2>Gérer les Articles</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Titre</th>
              <th>Date</th>
              <th>Texte</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {news.map((newsItem, index) => (
              <tr key={newsItem._id}>
                <td>{index + 1}</td>
                <td>{newsItem.title}</td>
                <td>{formatDate(newsItem.date)}</td>
                <td>{newsItem.texte}</td>
                <td>
                  <Button
                    variant="warning"
                    className="me-2"
                    onClick={() => handleEditClick(newsItem)}>
                    Modifier
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(newsItem._id)}>
                    Supprimer
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Modal show={showModal} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modifier l'article</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {currentNews && (
              <Form onSubmit={handleModalSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Titre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Titre de l'article"
                    name="title"
                    value={currentNews.title}
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
                      currentNews.date
                        ? new Date(currentNews.date).toISOString().split('T')[0]
                        : ''
                    }
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Texte</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Texte de l'article"
                    name="texte"
                    value={currentNews.texte}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="file"
                    name="image"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button type="submit" className="btn btn-primary w-100">
                  Modifier l'article
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

export default AdminNewsGestion;
