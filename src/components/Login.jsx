import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/main.scss';
import loginImage from '../assets/img/lebrun.png';
import { login } from '../Api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ email, password });
      console.log('Login successful:', response);
      e;
      localStorage.setItem('token', response.token);
      localStorage.setItem('userId', response.userId);
      localStorage.setItem('isAdmin', response.isAdmin);
      navigate('/');
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage(
        'Erreur de connexion. Veuillez vérifier vos identifiants.'
      );
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className='w-75'>
          <div className="card w-100 login-card">
            <div className="d-flex flex-row no-gutters w-100">
              <div className="w-50">
                <img src={loginImage} className="w-100" alt="Login" />
              </div>
              <div className="w-50 d-flex align-items-center">
                <div className="card-body">
                  <h3 className="card-title mb-4">Connectez-vous</h3>
                  {errorMessage && (
                    <div className="alert alert-danger" role="alert">
                      {errorMessage}
                    </div>
                  )}
                  <form onSubmit={handleLogin}>
                    <div className="form-group mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        placeholder="Adresse email"
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
                      <a href="/register">Créez-en un</a>
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
