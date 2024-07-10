import { Form, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Footer from './Footer';
import '../assets/scss/main.scss';
import clubimg from '../assets/img/club-image.png';

const ClubInfoPage = () => {
  return (
    <div className="club-info-page">
      <header>
        <NavBar />
      </header>
      <div className="container">
        <h1 className="text-center mb-4">
          Bienvenue au club de tennis de table de Lille !
        </h1>
        <div className="row my-4">
          <div className="col-md-6">
            <p>
              Que vous soyez débutant ou pongiste confirmé, à la recherche d'une
              pratique sportive conviviale ou de compétitions relevées, notre
              club vous ouvre ses portes.
            </p>
            <p>
              Situé au cœur de la ville, dans le quartier dynamique de [nom du
              quartier], notre club vous propose un cadre moderne et convivial
              pour pratiquer le tennis de table dans les meilleures conditions.
            </p>
            <p>
              Notre équipe d'entraîneurs passionnés et expérimentés dispense des
              cours de qualité pour tous les âges et tous les niveaux, du
              baby-ping aux vétérans, en passant par le loisir et la
              compétition.
            </p>
            <p>
              Que vous recherchiez à vous défouler, à progresser techniquement
              ou à rencontrer de nouvelles personnes, notre club a quelque chose
              à vous offrir.
            </p>
            <p>
              Parmi nos valeurs fortes, la convivialité, le respect et l'esprit
              d'équipe sont au cœur de notre philosophie. Nous mettons tout en
              œuvre pour que chacun se sente à l'aise et puisse s'épanouir au
              sein de notre club.
            </p>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <img src={clubimg} alt="Club Image" className="img-fluid rounded" />
          </div>
        </div>
        <div className="row my-4 text-center">
          <div className="col">
            <Link to="/seances-collectives" className="btn btn-primary">
              Découvrez nos séances collectives !
            </Link>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-md-3">
            <div className="card text-center border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">🎓 Des cours de qualité</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">🏆 De la compétition</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">💸 Tarif accessible</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">😊 Bonne ambiance</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ClubInfoPage;
