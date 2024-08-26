import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is included
import { FaStickyNote } from 'react-icons/fa'; // Importing the react-icons library for a custom logo

const SignIn = ({ onSignIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple front-end authentication
    if (username === 'aiman' && password === 'password') {
      onSignIn(username);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 custom-bg">
      <div className="col-md-4 custom-form-container shadow-lg p-4 rounded">
        <form onSubmit={handleSubmit} className="form-signin">
          <div className="text-center mb-4">
            <FaStickyNote size={72} className="text-primary mb-4" /> {/* React icon used as a logo */}
            <h1 className="h3 mb-3 font-weight-bold text-dark">NotaKaki</h1>
          </div>

          <div className="form-group mb-4">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-danger text-center">{error}</p>}

          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label className="form-check-label" htmlFor="rememberMe">
              Remember me
            </label>
          </div>

          <button className="btn btn-lg btn-primary btn-block w-100" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted text-center">© 2024</p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
