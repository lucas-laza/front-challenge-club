import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/main.scss';

function Footer() {
  return (
    <footer className="bg-primary text-white py-4 fixed-bottom">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h5 className="mb-3">
              <i className="fas fa-table-tennis"></i> TT Lille Métropole -
              Bienvenue dans l'univers du ping-pong !
            </h5>
            <p>
              Découvrez un club dynamique et convivial, où passionnés et
              amateurs se retrouvent pour partager leur amour de la petite
              balle.
            </p>
            <p>Rejoignez-nous et vivez l'expérience ping-pong !</p>
          </div>
          <div className="col-md-4 text-md-right">
            <ul className="list-unstyled">
              <li>
                <Link to="/contact" className="text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-white">
                  Nos événements
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white">
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

export default Footer;
