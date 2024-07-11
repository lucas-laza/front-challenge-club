import PropTypes from 'prop-types';
import '../assets/scss/main.scss';

const EventCard = ({ image, name, date, onClick }) => {
  console.log(name)
  return (
    <div className="card" onClick={onClick}>
      <img src={image} className="card-img-top"/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{date}</p>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default EventCard;
