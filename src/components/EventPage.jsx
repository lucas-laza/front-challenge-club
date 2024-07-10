import { Container, Row, Col } from 'react-bootstrap';
import NavBar from './NavBar';
import FooterWhite from './FooterWhite';
import EventCarousel from './EventCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/main.scss';
import { getAllEvents } from '../Api';
import { useState, useEffect } from 'react';

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsData = await getAllEvents();
        setEvents(eventsData);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="d-flex flex-column custom-bg">
      <NavBar />
      <div className="container ">
        <div className="d-flex flex-column align-items-start">
          <h2 className="title-second">Tournoi à venir</h2>
          <hr className="w-100" />
          <EventCarousel events={events.slice(0, 5)} />
        </div>

        <div className="d-flex flex-column align-items-start">
          <h2 className="title-second">Nos événements à venir</h2>
          <hr className="w-100" />
          <EventCarousel events={events.slice(5, 10)} />
        </div>

        <div className="d-flex flex-column align-items-start">
          <h2 className="title-second">Nos événements passés</h2>
          <hr className="w-100" />
          <EventCarousel events={events.slice(5, 10)} />
        </div>
      </div>
      <FooterWhite />
    </div>
  );
};

export default EventsPage;
