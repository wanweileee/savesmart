import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';
import Tesseract from 'tesseract.js';
import styles from './styles.module.css';

export default function CameraPage() {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    runOCR(imageSrc);
  };

  const runOCR = async (image) => {
    setLoading(true);
    const { data: { text } } = await Tesseract.recognize(image, 'eng');
    const parsed = parseExpense(text);
    setLoading(false);
    navigate('/add-expense', { state: parsed });
  };

  const parseExpense = (text) => {
    const lines = text.split('\n').filter(Boolean);
    const name = lines[0] || 'Unknown';
    const amountMatch = text.match(/\$\s?(\d+(?:\.\d{1,2})?)/) || text.match(/(\d+(?:\.\d{1,2}))\s?(SGD|\$)/i);
    const amount = amountMatch ? parseFloat(amountMatch[1]) : '';
    const date = new Date().toISOString().split('T')[0];
    const category = categorize(text);

    return { name, amount, category, date };
  };

  const categorize = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes('grab') || lower.includes('taxi')) return 'Transport';
    if (lower.includes('mcdonald') || lower.includes('food')) return 'Food';
    if (lower.includes('netflix') || lower.includes('subscription')) return 'Subscription';
    return 'Others';
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Scan Receipt</h2>
      {!capturedImage ? (
        <>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/png"
            className={styles.webcam}
          />
          <button onClick={captureImage} className={styles.button}>Capture</button>
        </>
      ) : loading ? (
        <p className={styles.loading}>Extracting text...</p>
      ) : (
        <img src={capturedImage} alt="Preview" className={styles.preview} />
      )}
    </div>
  );
}
