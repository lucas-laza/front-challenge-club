import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/main.scss';
import bannerimg from '../assets/img/hero-banner.svg';

const HeroBanner = () => {
  return (
    <div className="hero-banner mb-5 mt-5">
      <div className="hero-content d-flex justify-content-between align-items-center w-75">
        <div className="hero-img w-50 text-center">
          <img src={bannerimg} alt="Tennis de table" className="img-fluid" />
        </div>
        <div className="hero-title text-start">
          <div>
            <h1>Club de tennis de table de Lille</h1>
          </div>
          <div className='mt-4'>
            <p className="lead hero-text">
              Vous êtes passionné(e) de tennis de table ? Vous cherchez un club
              dynamique et convivial où vous pourrez pratiquer votre sport favori
              tout en vous amusant ? Alors ne cherchez pas plus loin, [Nom du club
              de tennis de table] est fait pour vous !
            </p>
          </div>
          <div className='mt-3'>
            <button className="hero-btn btn btn-primary mt-3">
              Découvrez nos séances collectives !
            </button> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
