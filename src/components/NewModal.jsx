import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const NewsModal = ({ show, handleClose, news }) => {
  if (!news) return null;

  // Replace backslashes with forward slashes in the image path
  const imagePath = news.imageUrl ? news.imageUrl.replace(/\\/g, '/') : null;
  const imageUrl = imagePath ? `http://localhost:3030/${imagePath}` : null;


console.log(imageUrl);

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
        {news.imageUrl && (
          <div className="text-center">
            <img
              src={imageUrl}
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
