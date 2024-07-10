import PropTypes from 'prop-types';
import '../assets/scss/main.scss';
import imagePlaceholder from '../assets/img/imageplaceholder.png'

const EventCard = ({ image, title, description, date, location }) => {
  return (
    <div className="card">
      <img src={imagePlaceholder} className="card-img-top" alt={title} />
      <div className="d-flex flex-column align-items-start p-3">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">{date}</p>
        <p className="card-text">{location}</p>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default EventCard;
