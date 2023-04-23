import styles from './Error.module.css';
import PrimaryButton from './PrimaryButton';
import PropTypes from 'prop-types';

const Error = ({ msg, onRetry }) => {
  return (
    <div className={styles.Error}>
      <p>{msg}</p>
      <PrimaryButton label="Try again" onClick={onRetry} />
    </div>
  );
};

Error.propTypes = {
  msg: PropTypes.string.isRequired,
  onRetry: PropTypes.func.isRequired
};

export default Error;
