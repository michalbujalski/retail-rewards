import { getMonthName } from '../../helpers/date';
import TransactionItem from './TransactionItem';
import styles from './MonthlyTransactions.module.css';

const MonthlyTransactions = ({ transactions, month }) => {
  return (
    <div>
      <h2 className={styles.MonthName}>{getMonthName(parseInt(month))}</h2>
      {transactions.map((transaction) => {
        return (
          <TransactionItem key={transaction.id} transaction={transaction} />
        );
      })}
      <h3 className={styles.TotalRewards}>
        {`Total Montly Reward Points: ${transactions.reduce((prev, curr) => {
          return prev + curr.reward;
        }, 0)}`}
      </h3>
    </div>
  );
};

export default MonthlyTransactions;
