import PropTypes from 'prop-types';
import '../assets/scss/main.scss';
import imagePlaceholder from '../assets/img/imageplaceholder.png';
import { formatDate } from '../utils/dateUtils';

const EventCard = ({ image, title, description, date, location }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  // Formater la date
  const formattedDate = formatDate(date);

  return (
    <>
      <div className="card" onClick={handleShow}>
        <img
          src={image || imagePlaceholder}
          className="card-img-top"
          alt={title}
        />
        <div className="d-flex flex-column align-items-start p-3">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">{formattedDate}</p>
          <p className="card-text">{location}</p>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={image || imagePlaceholder}
            className="img-fluid mb-3"
            alt={title}
          />
          <p>
            <strong>Description:</strong> {description}
          </p>
          <p>
            <strong>Date:</strong> {formattedDate}
          </p>
          <p>
            <strong>Location:</strong> {location}
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
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default EventCard;
