import styles from './PrimaryButton.module.css';

const PrimaryButton = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className={styles.PrimaryButton}>
      {label}
    </button>
  );
};

export default PrimaryButton;
