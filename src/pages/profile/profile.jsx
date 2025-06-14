import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import topBackground from '../../assets/bg.png';
import avatarImg from '../../assets/avatar.png'; // Replace with actual avatar

export default function Profile() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('username') || 'User';
    setUserName(storedName);
  }, []);

  return (
    <div className={styles.container}>
      {/* Top Header */}
      <header
        className={styles.heroHeader}
        style={{
          backgroundImage: `url(${topBackground})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
      >
        <h2 className={styles.pageTitle}>Profile</h2>
      </header>

      {/* Avatar and Name */}
      <div className={styles.profileSection}>
        <img src={avatarImg} alt="Avatar" className={styles.avatar} />
        <h3 className={styles.name}>{userName}</h3>
      </div>

      {/* Profile Options */}
      <div className={styles.options}>
        <div className={styles.optionItem}>Invite Friends</div>
        <div className={styles.optionItem}>Account info</div>
        <div className={styles.optionItem}>Personal profile</div>
        <div className={styles.optionItem}>Message center</div>
        <div className={styles.optionItem}>Login and security</div>
        <div className={styles.optionItem}>Data and privacy</div>
      </div>
    </div>
  );
}
