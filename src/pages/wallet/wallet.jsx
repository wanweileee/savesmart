import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import topBackground from '../../assets/bg.png';

export default function Wallet() {
  const [activeTab, setActiveTab] = useState('transactions');
  const [expenses, setExpenses] = useState([]);
  const BASE_BALANCE = 5000;

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('expenses') || '[]');
    setExpenses(saved);
  }, []);

  const getTotalBalance = () => {
    return expenses.reduce((acc, curr) => acc - parseFloat(curr.amount || 0), BASE_BALANCE);
  };

  const transactions = expenses.filter(e => e.type === 'transaction');
  const bills = expenses.filter(e => e.type === 'bill');
  const displayedItems = activeTab === 'transactions' ? transactions : bills;

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
        <h2 className={styles.pageTitle}>Wallet</h2>
      </header>

      <section className={styles.card}>
        <p className={styles.balanceLabel}>Total Balance</p>
        <h1 className={styles.balance}>${getTotalBalance().toFixed(2)}</h1>

        <div className={styles.actions}>
          <div className={styles.actionItem}><div className={styles.actionIcon}>＋</div><span>Add</span></div>
          <div className={styles.actionItem}><div className={styles.actionIcon}>◼</div><span>Pay</span></div>
          <div className={styles.actionItem}><div className={styles.actionIcon}>➤</div><span>Send</span></div>
        </div>
      </section>

      <div className={styles.tabs}>
        <div
          className={`${styles.tab} ${activeTab === 'transactions' ? styles.active : ''}`}
          onClick={() => setActiveTab('transactions')}
        >
          Transactions
        </div>
        <div
          className={`${styles.tab} ${activeTab === 'bills' ? styles.active : ''}`}
          onClick={() => setActiveTab('bills')}
        >
          Upcoming Bills
        </div>
      </div>

      <div className={styles.transactionList}>
        {displayedItems.map((item, index) => (
          <div key={index} className={styles.transactionItem}>
            <div className={styles.txnDetails}>
              <span className={styles.txnName}>{item.name}</span>
              <span className={styles.txnDate}>{item.date}</span>
            </div>
            <span className={item.amount >= 0 ? styles.amountPlus : styles.amountMinus}>
              {item.amount >= 0 ? `+ $${Number(item.amount).toFixed(2)}` : `- $${Math.abs(Number(item.amount)).toFixed(2)}`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
