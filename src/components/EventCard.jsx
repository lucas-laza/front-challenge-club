import PropTypes from 'prop-types';
import '../assets/scss/main.scss';

const EventCard = ({ image, title, description, date, location, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
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
  onClick: PropTypes.func.isRequired,
};

export default EventCard;
