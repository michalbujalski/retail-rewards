export const splitTransactionsPerMonth = (transactions) => {
  return transactions.reduce((acc, transaction) => {
    const month = transaction.timestamp.split('-')[1];
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(transaction);
    return acc;
  }, {});
};
