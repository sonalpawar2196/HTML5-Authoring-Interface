import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './login.module.css';
import harbingerLogo from '../../assets/HarbingerLogo.png';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Make POST request to login endpoint
      const response = await axios.post('http://localhost:5000/api/login', {
        username,
        password
      });

      // Assuming successful login
      console.log('Login successful:', response.data);
      setIsLoggedIn(true);
      navigate(`/dashboard/${username}`);

    } catch (error) {
      setError('Invalid username or password'); // Display error message
      console.error('Login failed:', error);
    }
  };
  if (isLoggedIn) {
    return (
      <div>
        <h2>Welcome to Dashboard!</h2>
        {/* Add dashboard content here */}
      </div>
    );
  }

  return (
    <div className={styles.loginForm}>
      <h2 className={styles.loginFormTitle}>Login</h2>
      <div className={styles.iconContainer}>
        <FontAwesomeIcon icon={faUser} className={styles.userIcon} />
      </div>
      <img src={harbingerLogo} alt="logo" className={styles.loginFormImg} />
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder='username'
            value={username}
            className={styles.loginFormInput}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder='password'
            value={password}
            className={styles.loginFormInput}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.loginFormButton}>Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
