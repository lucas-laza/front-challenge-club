import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/main.scss';
import bannerimg from '../assets/img/hero-banner.png';

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-content row align-items-center">
        <div className="hero-img col-md-6 text-center">
          <img src={bannerimg} alt="Tennis de table" className="img-fluid" />
        </div>
        <div className="hero-title col-md-6 text-start">
          <h1>Club de tennis de table de Lille</h1>
          <p className="lead hero-text">
            Vous êtes passionné(e) de tennis de table ? Vous cherchez un club
            dynamique et convivial où vous pourrez pratiquer votre sport favori
            tout en vous amusant ? Alors ne cherchez pas plus loin, [Nom du club
            de tennis de table] est fait pour vous !
          </p>
          <button className="hero-btn btn btn-primary">
            Découvrez nos séances collectives !
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
