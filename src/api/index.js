import transactions from './transactions.json';

export const fetchTransactions = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.2) {
        resolve(transactions);
      } else {
        reject(new Error('Something went wrong'));
      }
    }, 1000);
  });
};
