import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

export default function AddExpense() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    amount: '',
    category: '',
    date: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You could send `form` to an API or context here
    navigate('/homepage');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Add Expense</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Expense Name"
          value={form.name}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
          className={styles.input}
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category (e.g. Food, Travel)"
          value={form.category}
          onChange={handleChange}
          className={styles.input}
        />
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className={styles.input}
        />

        <button type="submit" className={styles.button}>Save Expense</button>
      </form>
    </div>
  );
}
