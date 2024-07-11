import { Container } from 'react-bootstrap';
import NavBar from './NavBar';
import FooterWhite from './FooterWhite';
import EventCarousel from './EventCarousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/main.scss';
import { getAllEvents } from '../Api';
import { useState, useEffect } from 'react';
import EventModal from './EventModal';
import RegisterModal from './RegisterModal';

const EventsPage = () => {
  const [ongoingTournaments, setOngoingTournaments] = useState([]);
  const [ongoingEvents, setOngoingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showEventModal, setShowEventModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsData = await getAllEvents();
        const now = new Date();

        const ongoingTournamentsData = eventsData.filter(
          (event) => new Date(event.date) >= now && event.is_tournament
        );

        const ongoingEventsData = eventsData.filter(
          (event) => new Date(event.date) >= now && !event.is_tournament
        );

        const pastEventsData = eventsData.filter(
          (event) => new Date(event.date) < now && !event.is_tournament
        );

        setOngoingTournaments(ongoingTournamentsData);
        setOngoingEvents(ongoingEventsData);
        setPastEvents(pastEventsData);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowEventModal(true);
  };

  const handleShowRegister = () => {
    setShowEventModal(false);
    setShowRegisterModal(true);
  };

  const handleCloseEventModal = () => setShowEventModal(false);
  const handleCloseRegisterModal = () => setShowRegisterModal(false);

  return (
    <div className="d-flex flex-column custom-bg">
      <NavBar />
      <div className="container mt-5 text-white mb-4">
        <div className="d-flex flex-column align-items-start">
          <h2 className="title-second">Tournoi à venir</h2>
          <hr className="w-100" />
          <EventCarousel
            events={ongoingTournaments}
            onEventClick={handleEventClick}
          />
        </div>

        <div className="d-flex flex-column align-items-start">
          <h2 className="title-second">Nos événements à venir</h2>
          <hr className="w-100" />
          <EventCarousel
            events={ongoingEvents}
            onEventClick={handleEventClick}
          />
        </div>

        <div className="d-flex flex-column align-items-start">
          <h2 className="title-second">Nos événements passés</h2>
          <hr className="w-100" />
          <EventCarousel events={pastEvents} onEventClick={handleEventClick} />
        </div>
      </div>
      <FooterWhite />

      <EventModal
        show={showEventModal}
        handleClose={handleCloseEventModal}
        event={selectedEvent}
        handleShowRegister={handleShowRegister}
      />
      <RegisterModal
        show={showRegisterModal}
        handleClose={handleCloseRegisterModal}
        event={selectedEvent}
      />
    </div>
  );
};

export default EventsPage;
