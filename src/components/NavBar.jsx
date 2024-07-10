import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/main.scss';

function Navbar() {
  return (
    <header class="d-flex flex-wrap bg-light align-items-center justify-content-center py-3 mb-4 border-bottom">
      <ul class="nav col-12 col-md-auto justify-content-center mb-md-0">
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
    </header>
  );
}

export default Navbar;
