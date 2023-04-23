import styles from './TransactionsHeader.module.css';

const TransactionsHeader = () => {
  return (
    <div className={styles.TransactionsHeader}>
      <div>Name</div>
      <div>Amount</div>
      <div>Reward</div>
      <div>Date</div>
    </div>
  );
};

export default TransactionsHeader;
