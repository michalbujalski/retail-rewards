import { createContext, useContext, useEffect, useState } from 'react';
import { fetchTransactions } from '../api';

const TransactionsContext = createContext({});

export const useTransactions = () => useContext(TransactionsContext);

const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const syncTransactions = async () => {
    try {
      setError(null);
      setIsLoading(true);
      const newTransactions = await fetchTransactions();
      console.log(newTransactions);
      setTransactions(newTransactions);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    syncTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ transactions, syncTransactions, isLoading, error }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export default TransactionsProvider;
