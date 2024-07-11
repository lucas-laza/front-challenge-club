import { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { getUserById, updateUser } from '../Api';
import NavBar from './NavBar';
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfilePage = () => {
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
  });

  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userData = await getUserById(userId, token);
        setUserDetails(userData);
      } catch (error) {
        setError('Error fetching user details: ' + error.message);
      }
    };

    fetchUserDetails();
  }, [userId, token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(userId, userDetails, token);
      toast.success('Profile updated successfully');
    } catch (error) {
      setError('Error updating profile: ' + error.message);
      toast.error('Error updating profile');
    }
  };

  return (
    <div className="profile-page">
      <NavBar />
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <h1 className="text-center">Profile</h1>
            {error && <p className="text-danger">{error}</p>}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={userDetails.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={userDetails.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button type="submit" variant="primary" className="w-100">
                Update Profile
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default ProfilePage;
