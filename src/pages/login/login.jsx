import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('username', username);
    navigate('/homepage');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="username"
          placeholder="Name"
          className={styles.input}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input type="password" placeholder="Password" className={styles.input} required />
        <button type="submit" className={styles.button}>Sign In</button>
      </form>
    </div>
  );
}

export default Login;
