import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/main.scss';
import { FaUser, FaUserShield } from 'react-icons/fa'; // Importer l'icône d'administration

function Navbar() {
  const isLoggedIn = !!localStorage.getItem('token'); // Vérifier si l'utilisateur est connecté
  const isAdmin = localStorage.getItem('is_admin') === 'true'; // Vérifier si l'utilisateur est un administrateur

  return (
    <header className="d-flex flex-wrap bg-light align-items-center justify-content-between py-3 mb-4 border-bottom">
      <div className="container d-flex justify-content-between align-items-center">
        <ul className="nav col-12 col-md-auto justify-content-center mb-md-0">
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              Accueil
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/events" className="nav-link" activeClassName="active">
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
        {isLoggedIn && (
          <div className="ms-auto d-flex align-items-center">
            {isAdmin && (
              <NavLink to="/admin-page" className="nav-link">
                <FaUserShield size={24} style={{ marginLeft: '20px' }} />
              </NavLink>
            )}
            <NavLink to="/profile" className="nav-link">
              <FaUser size={24} style={{ marginLeft: '20px' }} />
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
