import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/main.scss';
import registrationImage from '../assets/img/lebrun2.png';
import { signup } from '../Api';

function Registration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage('Les mots de passe ne correspondent pas.');
      return;
    }
    try {
      const response = await signup({ name, email, password });
      console.log('User registered:', response);
      navigate('/login');
    } catch (error) {
      console.error('Error during registration:', error);
      setErrorMessage("Une erreur est survenue lors de l'inscription.");
    }
  };

  return (
    <div className="container mt-5 h-100">
      <div className="row justify-content-center h-100">
        <div className='w-75 mb-5 h-50' style={{height: "50vh"}}>
          <div className="card w-100 login-card">
            <div className="d-flex flex-row no-gutters w-100">
              <div className="w-50">
                <img
                  src={registrationImage}
                  className="card-img h-100 rounded-0"
                  alt="Register"
                />
              </div>
              <div className="w-50 d-flex align-items-center">
                <div className="card-body">
                  <h3 className="card-title mb-4">Rejoignez-nous !</h3>
                  {errorMessage && (
                    <div className="alert alert-danger" role="alert">
                      {errorMessage}
                    </div>
                  )}
                  <form onSubmit={handleRegister}>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        placeholder="Nom"
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        placeholder="Email"
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
                    <div className="form-group mb-3">
                      <input
                        type="password"
                        className="form-control"
                        id="confirm-password"
                        value={confirmPassword}
                        placeholder="Confirmation du mot de passe"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                      Inscription
                    </button>
                    <div className="text-center mt-3">
                      <span>Déjà un compte ? </span>
                      <a href="/login">Connectez-vous</a>
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

export default Registration;
