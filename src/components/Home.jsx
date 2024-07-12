import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EventCarousel from './EventCarousel';
import NewsItem from './NewItems';
import '../assets/scss/main.scss';
import NavBar from './NavBar';
import Footer from './Footer';
import HeroBanner from './HeroBanner';
import { getAllEvents, getAllNews } from '../Api';
import NewsModal from './NewModal';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [showNewsModal, setShowNewsModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsData = await getAllEvents();
        setEvents(eventsData);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    const fetchNews = async () => {
      try {
        const newsData = await getAllNews();
        setNews(newsData);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchEvents();
    fetchNews();
  }, []);

  // Fonction pour ouvrir la modale avec l'actualité sélectionnée
  const handleNewsClick = (newsItem) => {
    setSelectedNews(newsItem);
    setShowNewsModal(true);
  };

  // Fonction pour fermer la modale
  const handleCloseNewsModal = () => {
    setShowNewsModal(false);
    setSelectedNews(null);
  };

  return (
    <div className="home">
      <NavBar />
      <HeroBanner />
      <div className="custom-bg p-3">
        <div className="container pb-5">
          <div className="d-flex flex-row text-white justify-content-between w-100 align-items-center mb-4 mt-4">
            <span className="title-custom">Nos événements</span>
            <button
              className="btn btn-light text-primary mt-3"
              onClick={() => navigate('/events')}>
              Voir tout
            </button>
          </div>
          <EventCarousel events={events} />
        </div>
      </div>
      <section className="news my-5 d-flex flex-column align-items-start container">
        <div className="d-flex flex-row justify-content-between w-100 align-items-center mb-4">
          <span className="text-dark title-custom">Nos actualités</span>
          <button
            className="btn btn-primary mt-3"
            onClick={() => navigate('/news')}>
            Voir tout
          </button>
        </div>
        <div className="list-group mb-4">
          {news.map((newsItem, index) => (
            <div key={index} onClick={() => handleNewsClick(newsItem)}>
              <NewsItem
                title={newsItem.title}
                description={newsItem.description}
                date={newsItem.date}
              />
            </div>
          ))}
        </div>
      </section>
      <Footer />
      <NewsModal
        show={showNewsModal}
        handleClose={handleCloseNewsModal}
        news={selectedNews}
      />
    </div>
  );
};

export default Home;
