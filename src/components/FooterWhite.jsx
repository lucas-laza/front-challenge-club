import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/main.scss';
import raquette from '../assets/img/raquetteWhite.svg'

function FooterWhite() {
  return (
    <footer className="bg-light text-dark w-100 py-4 text-start">
      <div className="footer-container">
        <div className="row">
          <div className="col-md-8">
            <h5 className="mb-3 d-flex flex-row align-items-center fw-bold">
              <i className="fas fa-table-tennis me-2 mt-1"><img style={{height: 32}} src={raquette} alt="" /></i> TT Lille Métropole -
              Bienvenue dans l'univers du ping-pong !
            </h5>
            <p style={{fontSize: 15}}>
              Découvrez un club dynamique et convivial, où passionnés et
              amateurs se retrouvent pour partager leur amour de la petite
              balle.
            </p>
            <p style={{fontSize: 15}}>Rejoignez-nous et vivez l'expérience ping-pong !</p>
          </div>
          <div className="col-md-4">
            <ul className="h-100 d-flex flex-column justify-content-between align-items-end">
              <li>
                <Link to="/contact" className="text-dark">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-dark">
                  Nos événements
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-dark">
                  Charte de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterWhite;
