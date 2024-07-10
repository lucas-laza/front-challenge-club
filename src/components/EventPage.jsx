import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './NavBar';
import FooterWhite from './FooterWhite';
import EventCarousel from './EventCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/main.scss';
import eventsData from '../json/events.json';

const EventsPage = () => {
  return (
    <div className="d-flex flex-column custom-bg">
      <NavBar />
      <div className='container '>
        <div className='d-flex flex-column align-items-start'>
          <h2 className="title-second">Tournoi à venir</h2>
          <hr className='w-100'/>
          <EventCarousel events={eventsData.slice(0, 5)} />
        </div>

        <div className='d-flex flex-column align-items-start'>
          <h2 className="title-second">Nos événements à venir</h2>
          <hr className='w-100'/>
          <EventCarousel events={eventsData.slice(5, 10)} />
        </div>

        <div className='d-flex flex-column align-items-start'>
          <h2 className="title-second">Nos événements passés</h2>
          <hr className='w-100'/>
          <EventCarousel events={eventsData.slice(5, 10)} />
        </div>
      </div>
      <FooterWhite/>
    </div>
  );
};

export default EventsPage;
