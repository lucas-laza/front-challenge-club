import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';
import { getAllUsers, updateUser, deleteUser } from '../Api';
import NavBarAdmin from './NavBarAdmin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminUsersGestion = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getAllUsers();
      setUsers(response);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleDelete = async (id) => {
    if (!id) {
      console.error('ID is undefined');
      return;
    }

    try {
      await deleteUser(id);
      toast.error('Utilisateur supprimé avec succès', {
        className: 'toast-red',
      });
      fetchUsers();
    } catch (error) {
      toast.error("Erreur lors de la suppression de l'utilisateur", {
        className: 'toast-red',
      });
      console.error('Error deleting user:', error);
    }
  };

  const handleEditClick = (user) => {
    if (!user || !user._id) {
      console.error('User or User ID is undefined');
      return;
    }

    setCurrentUser(user);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setCurrentUser(null);
  };

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    if (!currentUser || !currentUser._id) {
      console.error('Current User or User ID is undefined');
      return;
    }

    try {
      await updateUser(currentUser._id, currentUser);
      toast.warning('Utilisateur modifié avec succès', {
        className: 'toast-yellow',
      });
      fetchUsers();
      handleModalClose();
    } catch (error) {
      toast.error("Erreur lors de la modification de l'utilisateur", {
        className: 'toast-red',
      });
      console.error('Error updating user:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser({
      ...currentUser,
      [name]: value,
    });
  };

  return (
    <div className="admin-page d-flex">
      <NavBarAdmin />
      <Container className="content-container p-4">
        <h2>Gérer les Utilisateurs</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nom</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Button
                    variant="warning"
                    className="me-2"
                    onClick={() => handleEditClick(user)}>
                    Modifier
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(user._id)}>
                    Supprimer
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Modal show={showModal} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modifier l'utilisateur</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {currentUser && (
              <Form onSubmit={handleModalSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nom de l'utilisateur"
                    name="name"
                    value={currentUser.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={currentUser.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Button type="submit" className="btn btn-primary w-100">
                  Modifier l'utilisateur
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

export default AdminUsersGestion;
