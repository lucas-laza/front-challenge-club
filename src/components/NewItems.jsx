import PropTypes from 'prop-types';
import '../assets/scss/main.scss';

const NewsItem = ({ title, description, date }) => {
  return (
    <div className="list-group-item mb-3">
      <h5 className="mb-1">{title}</h5>
      <p className="mb-1">{description}</p>
      <small className="text-muted">{date}</small>
    </div>
  );
};

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default NewsItem;
