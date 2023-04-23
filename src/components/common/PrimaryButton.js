import styles from './PrimaryButton.module.css';
import PropTypes from 'prop-types';

const PrimaryButton = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className={styles.PrimaryButton}>
      {label}
    </button>
  );
};

PrimaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default PrimaryButton;
