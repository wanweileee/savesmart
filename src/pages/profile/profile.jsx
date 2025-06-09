import styles from './styles.module.css';

const profileOptions = [
  'Invite Friends',
  'Account Info',
  'Personal Profile',
  'Message Center',
  'Login and Security',
  'Data and Privacy',
];

export default function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.profileHeader}>
        <img
          className={styles.avatar}
        //   src="https://i.pravatar.cc/100?img=5" // Replace with real user avatar
          alt="User avatar"
        />
        <h2 className={styles.username}>Wan Wei</h2>
      </div>

      <ul className={styles.optionList}>
        {profileOptions.map((option, idx) => (
          <li key={idx} className={styles.optionItem}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}
