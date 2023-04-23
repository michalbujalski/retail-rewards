import { formatAmount } from '../../helpers/amount';
import { formatDate } from '../../helpers/date';
import styles from './TransactionItem.module.css';

const TransactionItem = ({ transaction }) => {
  const { amount, name, timestamp } = transaction;

  return (
    <div className={styles.TransactionItem}>
      <div>{name}</div>
      <div>{formatAmount(amount)}</div>
      <div>{formatDate(timestamp)}</div>
    </div>
  );
};

export default TransactionItem;
