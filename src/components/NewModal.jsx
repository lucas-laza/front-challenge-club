import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const NewsModal = ({ show, handleClose, news }) => {
  if (!news) return null;

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{news.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{news.texte}</p>
        <p>
          <strong>Date:</strong> {new Date(news.date).toLocaleDateString()}
        </p>
        {news.image && (
          <div className="text-center">
            <img
              src={news.image}
              alt={news.title}
              style={{ maxWidth: '100%' }}
            />
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

NewsModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  news: PropTypes.object,
};

export default NewsModal;
