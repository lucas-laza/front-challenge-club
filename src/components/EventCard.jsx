import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import '../assets/scss/main.scss';
import imagePlaceholder from '../assets/img/imageplaceholder.png';
import { formatDate } from '../utils/dateUtils';

const EventCard = ({ image, name, description, date, location }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const formattedDate = formatDate(date);

  return (
    <>
      <div className="card" onClick={handleShow}>
        <img
          src={image || imagePlaceholder}
          className="card-img-top"
          alt={name}
        />
        <div className="d-flex flex-column align-items-start p-3">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">{formattedDate}</p>
          <p className="card-text">{location}</p>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={image || imagePlaceholder}
            className="img-fluid mb-3"
            alt={name}
          />
          <p>
            <strong>Titre : </strong> {name}
          </p>
          <p>
            <strong>Date:</strong> {formattedDate}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

EventCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default EventCard;
