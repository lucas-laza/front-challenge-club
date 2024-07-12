import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/main.scss';
import { Link } from 'react-router-dom';

function NavBarAdmin() {
  const handleSignOut = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 bg-dark text-white"
      style={{ width: 280, height: '100vh' }}>
      <h2 className="text-center mb-4">Admin Panel</h2>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item mb-3">
          <Link to="/" className="nav-link text-white" aria-current="page">
            Home
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link to="/admin/events/create" className="nav-link text-white">
            Creation Événements
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link to="/admin/events/gestion" className="nav-link text-white">
            Gestion Événements
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link to="/admin/news/create" className="nav-link text-white">
            Creation Actualités
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link to="/admin/news/gestion" className="nav-link text-white">
            Gestion Actualités
          </Link>
        </li>
        <li className="nav-item mb-3">
          <Link to="/admin/users/gestion" className="nav-link text-white">
            Gestion Utilisateurs
          </Link>
        </li>
      </ul>
      <hr />
      <div className="mt-auto">
        <button className="btn btn-danger w-100" onClick={handleSignOut}>
          Sign out
        </button>
      </div>
    </div>
  );
}

export default NavBarAdmin;
