import { useEffect, useState } from 'react';
import EventCarousel from './EventCarousel';
import NewsItem from './NewItems';
import '../assets/scss/main.scss';
import NavBar from './NavBar';
import Footer from './Footer';
import HeroBanner from './HeroBanner';
import eventsData from '../json/events.json';
import newsData from '../json/newsdata.json';

const Home = () => {
  const [events, setEvents] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    setEvents(eventsData);
    setNews(newsData);
  }, []);

  return (
    <div className="home">
      <header className="container my-5">
        <NavBar />
      </header>
      <HeroBanner />
      <div className="container">
        <h2>Nos événements</h2>
        <EventCarousel events={events} />
        <button className="btn btn-primary mt-3">Voir tout</button>
      </div>
      <section className="news my-5">
        <h2>Nos actualités</h2>
        <div className="list-group">
          {news.map((newsItem, index) => (
            <NewsItem
              key={index}
              title={newsItem.title}
              description={newsItem.description}
              date={newsItem.date}
            />
          ))}
        </div>
        <button className="btn btn-secondary mt-3">Voir tout</button>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
