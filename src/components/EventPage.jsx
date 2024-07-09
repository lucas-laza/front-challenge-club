import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './NavBar';
import Footer from './Footer';
import EventCarousel from './EventCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/main.scss';
import eventsData from '../json/events.json';

const EventsPage = () => {
  return (
    <div className="events-page">
      <header className="container my-5">
        <NavBar />
      </header>
      <Container>
        <h2 className="mb-4">Tournoi à venir</h2>
        <EventCarousel events={eventsData.slice(0, 5)} />

        <h2 className="my-4">Nos événements à venir</h2>
        <EventCarousel events={eventsData.slice(5, 10)} />

        <h2 className="my-4">Nos événements passés</h2>
        <EventCarousel events={eventsData.slice(10)} />
      </Container>
      <Footer />
    </div>
  );
};

export default EventsPage;
