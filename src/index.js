import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const validateEmail = (input) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(input);
  };

  const validatePassword = (input) => {
    return input.length >= 8;
  };

  const handleEmailChange = (e) => {
    const input = e.target.value;
    setEmail(input);
    setEmailValid(validateEmail(input));
    if (!emailTouched) {
      setEmailTouched(true);
    }
  };

  const handlePasswordChange = (e) => {
    const input = e.target.value;
    setPassword(input);
    setPasswordValid(validatePassword(input));
    if (!passwordTouched) {
      setPasswordTouched(true);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const input = e.target.value;
    setConfirmPassword(input);
    setConfirmPasswordValid(input === password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert('Form submitted successfully');
    } else {
      alert('Can’t submit the form');
    }
  };

  return (
    <div className="main">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label><br/>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={() => setEmailTouched(true)}
            style={{
              borderColor: emailTouched && !emailValid ? 'red' : emailValid ? 'green' : '',
            }}
          />
          {emailTouched && !emailValid && <p style={{ color: 'red' }}>Invalid email format</p>}
        </div>
        <div className="form-group">
          <label>Password:</label><br/>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            onBlur={() => setPasswordTouched(true)}
            style={{
              borderColor: passwordTouched && !passwordValid ? 'red' : passwordValid ? 'green' : '',
            }}
          />
          {passwordTouched && !passwordValid && (
            <p style={{ color: 'red' }}>Password must be at least 8 characters long</p>
          )}
        </div>
        <div className="form-group">
          <label>Confirm Password:</label><br/>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {!confirmPasswordValid && (
            <p style={{ color: 'red' }}>Passwords do not match</p>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

ReactDOM.render(<SignUpForm />, document.getElementById('root'));
