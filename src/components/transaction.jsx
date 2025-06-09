import styles from './transaction.module.css';

export default function Transaction({ data }) {
  const { name, date, amount } = data;
  const isPositive = amount >= 0;

  return (
    <li className={styles.transactionItem}>
      <div>
        <div className={styles.transactionName}>{name}</div>
        <div className={styles.transactionDate}>{date}</div>
      </div>
      <div className={isPositive ? styles.amountPositive : styles.amountNegative}>
        {isPositive ? '+' : '-'}${Math.abs(amount)}
      </div>
    </li>
  );
}
