import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/main.scss';
import loginImage from '../assets/img/lebrun.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div>
          <div className="card login-card">
            <div className="row no-gutters">
              <div className="col-md-6">
                <img src={loginImage} className="card-img" alt="Login" />
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="card-body">
                  <h3 className="card-title mb-4">Connectez vous</h3>
                  <form onSubmit={handleLogin}>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        value={email}
                        placeholder="Nom d'utilisateur"
                        onChange={(e) => setEmail(e.target.value)}
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
                    <div className="form-group mb-3 text-right">
                      <a href="#forgot-password" className="forgot-password">
                        Mot de passe oublié ?
                      </a>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Connexion
                    </button>
                    <div className="text-center mt-3">
                      <span>Pas encore de compte ? </span>
                      <a href="/register">Créez en un</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
