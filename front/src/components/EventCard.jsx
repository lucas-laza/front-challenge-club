import PropTypes from 'prop-types';
import '../assets/scss/main.scss';

const EventCard = ({ image, title, description, date, location }) => {
  return (
    <div className="col-md-3 mb-4">
      <div className="card">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">{date}</p>
          <p className="card-text">{location}</p>
        </div>
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
