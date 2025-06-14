import { useState } from 'react';
import styles from './styles.module.css';
import topBackground from '../../assets/bg.png';

export default function Wallet() {
  const [activeTab, setActiveTab] = useState('transactions');

  const transactions = [
    { name: 'Upwork', date: 'Today', amount: 850 },
    { name: 'Transfer', date: 'Yesterday', amount: -85 },
    { name: 'Paypal', date: 'Jan 30, 2022', amount: 1406 },
    { name: 'YouTube', date: 'Jan 16, 2022', amount: -11.99 },
  ];

  const upcomingBills = [
    { name: 'Netflix', date: 'June 20, 2025', amount: -18.99 },
    { name: 'Spotify', date: 'June 22, 2025', amount: -9.99 },
    { name: 'Phone Bill', date: 'June 25, 2025', amount: -48.50 },
  ];

  const displayedItems = activeTab === 'transactions' ? transactions : upcomingBills;

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
        <h1 className={styles.balance}>$2,548.00</h1>

        <div className={styles.actions}>
          <div className={styles.actionItem}><div className={styles.actionIcon}>＋</div><span>Add</span></div>
          <div className={styles.actionItem}><div className={styles.actionIcon}>◼</div><span>Pay</span></div>
          <div className={styles.actionItem}><div className={styles.actionIcon}>➤</div><span>Send</span></div>
        </div>
      </section>

      {/* Tabs */}
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

      {/* Displayed Transactions or Bills */}
      <div className={styles.transactionList}>
        {displayedItems.map((item, index) => (
          <div key={index} className={styles.transactionItem}>
            <div className={styles.txnDetails}>
              <span className={styles.txnName}>{item.name}</span>
              <span className={styles.txnDate}>{item.date}</span>
            </div>
            <span className={item.amount >= 0 ? styles.amountPlus : styles.amountMinus}>
              {item.amount >= 0 ? `+ $${item.amount.toFixed(2)}` : `- $${Math.abs(item.amount).toFixed(2)}`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
