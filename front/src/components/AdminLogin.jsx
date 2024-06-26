import { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/main.scss';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Nom d'utilisateur:", username);
    console.log('Mot de passe:', password);
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div
        className="card p-4 shadow-sm"
        style={{ width: '100%', maxWidth: '400px' }}>
        <div className="card-body">
          <h3 className="card-title mb-4 text-center">Administration</h3>
          <form onSubmit={handleLogin}>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                placeholder="Nom d'utilisateur"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                placeholder="Mot de passe"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Connexion
            </button>
            <Link to="/" className="btn btn-danger w-100 mt-3">
              Annuler
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
