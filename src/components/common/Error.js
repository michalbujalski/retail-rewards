import styles from './Error.module.css';
import PrimaryButton from './PrimaryButton';

const Error = ({ msg, onRetry }) => {
  return (
    <div className={styles.Error}>
      <p>{msg}</p>
      <PrimaryButton label="Try again" onClick={onRetry} />
    </div>
  );
};
export default Error;
