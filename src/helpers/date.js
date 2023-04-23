export const formatDate = (rawDate) => {
  const date = new Date(rawDate);

  return date.toLocaleDateString('pl-PL', {
    month: '2-digit',
    year: 'numeric',
    day: '2-digit',
    hour: '2-digit',
    hour12: false,
    minute: '2-digit'
  });
};

export const getMonthName = (month) => {
  const date = new Date();
  date.setMonth(month - 1);

  return date.toLocaleString('en-US', { month: 'long' });
};

const START_IDX = 0;
const FIRST_DAY_OF_MONTH = 1;
export const getPastMonthTransactions = (transactions, monthsNum) => {
  const startDate = new Date(transactions[START_IDX].timestamp);
  startDate.setMonth(startDate.getMonth() - (monthsNum - 1));
  startDate.setDate(FIRST_DAY_OF_MONTH);

  return transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.timestamp);
    return transactionDate > startDate;
  });
};
