import React, { useState } from 'react';
// import './SignInForm.css';
import './signin.css'

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call your authentication function here, passing in email and password
  };

  return (
    <div className="signin-form-container">
      <form onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <div className="input-container-new">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container-new">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="click">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
