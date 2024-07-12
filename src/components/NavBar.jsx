import { NavLink, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/main.scss';

function Navbar() {
  const isLoggedIn = !!localStorage.getItem('token');
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <header className="d-flex flex-wrap bg-light align-items-center justify-content-between py-3 mb-4 border-bottom">
      <div className="container d-flex justify-content-between align-items-center">
        <ul className="nav col-12 col-md-auto justify-content-center mb-md-0 flex-wrap w-100">
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
        <div className="ms-auto d-flex align-items-center">
          {isLoggedIn ? (
            <>
              {isAdmin && (
                <NavLink
                  to="/admin/events/create"
                  className="btn btn-outline-primary ml-2 me-2">
                  Admin
                </NavLink>
              )}
              <NavLink
                to="/profile"
                className="btn btn-outline-secondary ml-2 me-2">
                Profil
              </NavLink>
              <button
                className="btn btn-outline-danger ml-2 me-2"
                onClick={handleLogout}>
                Déconnexion
              </button>
            </>
          ) : (
            <NavLink to="/login" className="btn btn-outline-primary">
              Connexion
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
