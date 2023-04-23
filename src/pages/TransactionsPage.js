import TransactionItem from '../components/transactions/TransactionItem';
import { useTransactions } from '../providers/transactions.provider';
import Loader from '../components/common/Loader';
import styles from './TransactionsPage.module.css';
import Error from '../components/common/Error';

const TransactionsPage = () => {
  const { isLoading, error, transactions, syncTransactions } =
    useTransactions();
  const handleRetry = () => syncTransactions();
  if (isLoading) {
    return (
      <div className={styles.LoaderWrapper}>
        <Loader />
      </div>
    );
  }
  if (error)
    return (
      <div className={styles.ErrorWrapper}>
        <Error msg={error.message} onRetry={handleRetry} />
      </div>
    );

  return (
    <div>
      {transactions.map((transaction) => {
        return (
          <TransactionItem key={transaction.id} transaction={transaction} />
        );
      })}
    </div>
  );
};

export default TransactionsPage;
