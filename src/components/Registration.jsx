import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/main.scss';
import registrationImage from '../assets/img/lebrun2.png';

function Registration() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div>
          <div className="card login-card">
            <div className="row no-gutters">
              <div className="col-md-6">
                <img
                  src={registrationImage}
                  className="card-img h-100 rounded-0"
                  alt="Register"
                />
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div className="card-body">
                  <h3 className="card-title mb-4">Rejoignez-nous !</h3>
                  <form onSubmit={handleRegister}>
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
                      <a href="/login">Connectez vous</a>
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
