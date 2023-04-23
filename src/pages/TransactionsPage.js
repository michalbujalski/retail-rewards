import { useMemo } from 'react';
import { useTransactions } from '../providers/transactions.provider';
import Loader from '../components/common/Loader';
import styles from './TransactionsPage.module.css';
import Error from '../components/common/Error';
import TransactionsHeader from '../components/transactions/TransactionsHeader';
import { splitTransactionsPerMonth } from '../helpers/transactions';
import MonthlyTransactions from '../components/transactions/MonthlyTransactions';
import { getPastMonthTransactions } from '../helpers/date';

const TransactionsPage = () => {
  const { isLoading, error, transactions, syncTransactions } =
    useTransactions();
  const handleRetry = () => syncTransactions();
  const montthlyTransactions = useMemo(() => {
    if (transactions.length > 0) {
      return splitTransactionsPerMonth(
        getPastMonthTransactions(transactions, 3)
      );
    } else {
      return {};
    }
  }, [transactions]);

  const totalRewards = useMemo(() => {
    return transactions.reduce((acc, transaction) => {
      return acc + transaction.reward;
    }, 0);
  }, [transactions]);
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
      <TransactionsHeader />
      {Object.entries(montthlyTransactions).map(([month, transactions]) => {
        return (
          <MonthlyTransactions
            key={month}
            month={month}
            transactions={transactions}
          />
        );
      })}

      <h1>Total Reward Points: {totalRewards}</h1>
    </div>
  );
};

export default TransactionsPage;
