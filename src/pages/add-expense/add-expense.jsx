import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import topBackground from '../../assets/bg.png';

export default function AddExpense() {
  const location = useLocation();
  const navigate = useNavigate();
  const ocrData = location.state;

  const [form, setForm] = useState({
    name: '',
    amount: '',
    category: '',
    date: '',
    type: 'transaction',
  });

  useEffect(() => {
    if (ocrData) {
      setForm(prev => ({
        ...prev,
        name: ocrData.name || '',
        amount: ocrData.amount || '',
        category: ocrData.category || '',
        date: ocrData.date || '',
      }));
    }
  }, [ocrData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem('expenses') || '[]');
    localStorage.setItem('expenses', JSON.stringify([...existing, form]));
    navigate('/wallet');
  };

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
        <h2 className={styles.pageTitle}>Add Expense</h2>
      </header>

      <form onSubmit={handleSubmit} className={styles.card}>
        <label className={styles.label}>TYPE</label>
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className={styles.input}
        >
          <option value="transaction">Transaction</option>
          <option value="bill">Upcoming Bill</option>
        </select>

        <label className={styles.label}>NAME</label>
        <input
          type="text"
          name="name"
          placeholder="Expense Name"
          value={form.name}
          onChange={handleChange}
          className={styles.input}
          required
        />

        <label className={styles.label}>AMOUNT</label>
        <input
          type="number"
          name="amount"
          placeholder="$ 0.00"
          value={form.amount}
          onChange={handleChange}
          className={styles.input}
          required
        />

        <label className={styles.label}>CATEGORY</label>
        <input
          type="text"
          name="category"
          placeholder="e.g. Food, Transport"
          value={form.category}
          onChange={handleChange}
          className={styles.input}
        />

        <label className={styles.label}>DATE</label>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className={styles.input}
        />

        <button type="submit" className={styles.submitBtn}>Save Expense</button>
        <button
          type="button"
          className={styles.cameraBtn}
          onClick={() => navigate('/camera')}
        >
          Use Camera
        </button>
      </form>
    </div>
  );
}
