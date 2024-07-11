import { Form, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Footer from './Footer';
import '../assets/scss/main.scss';
import clubimg from '../assets/img/club-image.png';
import learn from '../assets/img/trophy-solid.svg'
import pig from '../assets/img/piggy-bank-solid.svg'
import laugth from '../assets/img/face-laugh-squint-solid.svg'
import check from '../assets/img/clipboard-check-solid.svg'

const ClubInfoPage = () => {
  return (
    <div className="d-flex flex-column ">
      <NavBar />
      <div className="container mt-5">
        <div className="row my-4 mb-5">
        <h1 className="text-align-left mb-4 fw-semibold" style={{fontSize: 24}}> 
              Bienvenue au club de tennis de table de Lille !
          </h1>
          <div className="col-md-6">
            
            <p className='text-align-left mt-2'>
              Que vous soyez débutant ou pongiste confirmé, à la recherche d'une
              pratique sportive conviviale ou de compétitions relevées, notre
              club vous ouvre ses portes.
            </p>
            <p className='text-align-left mt-2'>
              Situé au cœur de la ville, dans le quartier dynamique de [nom du
              quartier], notre club vous propose un cadre moderne et convivial
              pour pratiquer le tennis de table dans les meilleures conditions.
            </p>
            <p className='text-align-left mt-2'>
              Notre équipe d'entraîneurs passionnés et expérimentés dispense des
              cours de qualité pour tous les âges et tous les niveaux, du
              baby-ping aux vétérans, en passant par le loisir et la
              compétition.
            </p>
            <p className='text-align-left mt-2'>
              Que vous recherchiez à vous défouler, à progresser techniquement
              ou à rencontrer de nouvelles personnes, notre club a quelque chose
              à vous offrir.
            </p>
            <p className='text-align-left mt-2'>
              Parmi nos valeurs fortes, la convivialité, le respect et l'esprit
              d'équipe sont au cœur de notre philosophie. Nous mettons tout en
              œuvre pour que chacun se sente à l'aise et puisse s'épanouir au
              sein de notre club.
            </p>
            <div className="col mt-3">
            <Link to="/seances-collectives" className="btn btn-primary">
              Découvrez nos séances collectives !
            </Link>
          </div>
          </div>
          <div className="col-md-6 d-flex flex-column align-items-end">
            <img src={clubimg} alt="Club Image" className="img-fluid rounded" />
          </div>
        </div>
        <div className="row my-4 text-center">
          
        </div>
        <div className="row my-4 mb-5 mt-5">
          <div className="col-md-3">
            <div className="card text-center border-3 border border-primary">
              <div className="card-body">
                <h5 className="card-title d-flex flex-row align-items-center mt-1"><img src={check} alt="" className='me-3' /> Des cours de qualité</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center border-3 border border-primary">
              <div className="card-body">
                <h5 className="card-title d-flex flex-row align-items-center mt-1"><img src={learn} alt="" className='me-3' /> De la compétition</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center border-3 border border-primary">
              <div className="card-body">
                <h5 className="card-title d-flex flex-row align-items-center mt-1"><img src={pig} alt="" className='me-3' /> Tarif accessible</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center border-3 border border-primary">
              <div className="card-body">
                <h5 className="card-title d-flex flex-row align-items-center mt-1"><img src={laugth} alt="" className='me-3' /> Bonne ambiance</h5>
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
