import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EventCarousel from './EventCarousel';
import NewsItem from './NewItems';
import '../assets/scss/main.scss';
import NavBar from './NavBar';
import Footer from './Footer';
import HeroBanner from './HeroBanner';
import { getAllEvents, getAllNews } from '../Api';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [news, setNews] = useState([]);
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

  return (
    <div className="home">
      <NavBar />
      <HeroBanner />
      <div className="custom-bg p-3">
        <div className="container pb-5">
          <div className="d-flex flex-row justify-content-between w-100 align-items-center mb-4 mt-4">
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
            <NewsItem
              key={index}
              title={newsItem.title}
              description={newsItem.description}
              date={newsItem.date}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
