import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import Transaction from '../../components/transaction';
import addIcon from '../../assets/add-icon.png';
import topBackground from '../../assets/bg.png';


export default function Homepage() {
  const [expenses, setExpenses] = useState([]);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedName = localStorage.getItem('username') || 'User';
    setUserName(storedName);
  }, []);

  const BASE_BALANCE = 5000;

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('expenses') || '[]');
    setExpenses(saved);
  }, []);

  const getTotalBalance = () => {
    return expenses.reduce((acc, curr) => acc - parseFloat(curr.amount || 0), BASE_BALANCE);
  };

  const transactions = expenses.filter(e => e.type === 'transaction');

  return (
    <div className={styles.container}>
      <header
        className={styles.heroHeader}
        style={{
          backgroundImage: `url(${topBackground})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
      >
        <h2 className={styles.greeting}>Good afternoon,</h2>
        <h1 className={styles.name}>{userName} 👋</h1>

      </header>

      <section className={styles.balanceCardWrapper}>
        <div className={styles.balanceCard}>
          <div className={styles.balanceTop}>
            <span className={styles.balanceLabel}>Total Balance</span>
            <span className={styles.balanceMenu}>⋯</span>
          </div>
          <div className={styles.balanceValue}>${getTotalBalance().toFixed(2)}</div>
          <div className={styles.balanceBreakdown}>
            <div className={styles.statBox}>
              <span className={styles.statIcon}>↓</span>
              <div>
                <p className={styles.statLabel}>Income</p>
                <p className={styles.statAmount}>$0.00</p>
              </div>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statIcon}>↑</span>
              <div>
                <p className={styles.statLabel}>Expenses</p>
                <p className={styles.statAmount}>${expenses.reduce((acc, e) => acc + parseFloat(e.amount || 0), 0).toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Recent Transactions</h3>
        <ul className={styles.transactionList}>
          {transactions.slice(0, 3).map((txn, idx) => (
            <Transaction key={idx} data={txn} />
          ))}
        </ul>
      </section>

      <Link to="/add-expense" className={styles.floatingAddBtn}>
        <img src={addIcon} alt="Add" className={styles.addIcon} />
      </Link>
    </div>
  );
}
