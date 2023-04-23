import { render, screen } from '@testing-library/react';
import MonthlyTransactions from './MonthlyTransactions';

test('renders learn react link', () => {
  render(
    <MonthlyTransactions
      month="4"
      transactions={[
        {
          id: '3a1e3c11-87fc-4c8e-ae67-045821aeab9b',
          name: 'Transaction 20',
          amount: 120,
          reward: 90,
          timestamp: '2023-04-09T22:50:13.123456'
        },
        {
          id: '0d76cc45-7a9f-45a2-b9fa-11dd22e5f5ba',
          name: 'Transaction 19',
          amount: 79.08,
          reward: 29,
          timestamp: '2023-04-05T09:20:05.123456'
        }
      ]}
    />
  );

  const title = screen.getByText(/April/i);
  expect(title).toBeInTheDocument();
  const transactions = screen.getAllByTestId('transaction-item');
  expect(transactions.length).toEqual(2);
  const reward = screen.getByText(/Total Montly Reward Points: 119/i);
  expect(reward).toBeInTheDocument();
});
