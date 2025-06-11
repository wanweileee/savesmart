import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import topBackground from '../../assets/bg.png';

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
    navigate('/homepage');
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
        {/* Name Field */}
        <label className={styles.label}>NAME</label>
        <div className={styles.inputWithIcon}>
          <input
            type="text"
            name="name"
            placeholder="Expense Name"
            value={form.name}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        {/* Amount Field */}
        <label className={styles.label}>AMOUNT</label>
        <div className={styles.amountRow}>
          <input
            type="number"
            name="amount"
            placeholder="$ 0.00"
            value={form.amount}
            onChange={handleChange}
            className={styles.input}
            required
          />
          <button type="button" className={styles.clearBtn} onClick={() => setForm({ ...form, amount: '' })}>
            Clear
          </button>
        </div>

        {/* Date Field */}
        <label className={styles.label}>DATE</label>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className={styles.input}
        />

        {/* Invoice Upload */}
        <label className={styles.label}>INVOICE</label>
        <div className={styles.invoiceBox}>
          <span>＋ Add Invoice</span>
        </div>

        {/* Submit and Camera Button */}
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
