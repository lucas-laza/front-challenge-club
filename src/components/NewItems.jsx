import PropTypes from 'prop-types';
import '../assets/scss/main.scss';

const NewsItem = ({ title, description, date }) => {
  return (
    <div className="text-dark d-flex flex-column align-items-start mb-3">
      <div className='d-flex flex-row mb-3'>
        <button type="button" class="btn btn-primary btn-sm">Nouveauté</button>
        <button type="button" class="btn btn-warning btn-sm ms-2">Pro 1</button>
      </div>
      <h5 className="mb-1">{title}</h5>
      <hr className='w-100 border-primary' />
      <p className="mb-1 text-align-left">{description}</p>
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
