import { formatAmount } from '../../helpers/amount';
import { formatDate } from '../../helpers/date';
import styles from './TransactionItem.module.css';

const TransactionItem = ({ transaction }) => {
  const { amount, name, timestamp, reward } = transaction;

  return (
    <div className={styles.TransactionItem} data-testid="transaction-item">
      <div>{name}</div>
      <div>{formatAmount(amount)}</div>
      <div>{reward}</div>
      <div>{formatDate(timestamp)}</div>
    </div>
  );
};

export default TransactionItem;
