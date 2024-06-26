import EventCard from './EventCard';
import NewsItem from './NewItems';
import '../assets/scss/main.scss';
import NavBar from './NavBar';
import Footer from './Footer';
import HeroBanner from './HeroBanner';

const Home = () => {
  return (
    <div className="home">
      <header className="container my-5">
        <NavBar />
      </header>
      <HeroBanner />
      <section className="events my-5">
        <h2>Nos événements</h2>
        <div className="row">
          <EventCard
            image="path/to/event-image.jpg"
            title="LILLE - TOURCOING"
            description="Match amical"
            date="27 juin 2023"
            location="21h30 au bistrot, Lille"
          />
          {/* Répétez pour les autres événements */}
        </div>
        <button className="btn btn-secondary mt-3">Voir tout</button>
      </section>
      <section className="news my-5">
        <h2>Nos actualités</h2>
        <div className="list-group">
          <NewsItem
            title="Le T.T Lille Métropole exulte : Promu en Pro A !"
            description="Le 17 juin 2023..."
            date="17/06/2023 à 18:43"
          />
          {/* Répétez pour les autres actualités */}
        </div>
        <button className="btn btn-secondary mt-3">Voir tout</button>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
