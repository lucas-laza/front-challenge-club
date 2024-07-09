import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/main.scss';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav">
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-link"
                activeClassName="active">
                Accueil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/events"
                className="nav-link"
                activeClassName="active">
                Nos événements
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/news" className="nav-link" activeClassName="active">
                Nos actualités
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about-us"
                className="nav-link"
                activeClassName="active">
                Notre club
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link"
                activeClassName="active">
                Contactez-nous
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
