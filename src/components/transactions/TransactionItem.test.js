import { render, screen } from '@testing-library/react';
import TransactionItem from './TransactionItem';

test('renders learn react link', () => {
  render(
    <TransactionItem
      transaction={{
        id: '3a1e3c11-87fc-4c8e-ae67-045821aeab9b',
        name: 'Transaction 110',
        amount: 120,
        reward: 90,
        timestamp: '2023-04-09T22:50:13.123456'
      }}
    />
  );

  const name = screen.getByText(/Transaction 110/);
  expect(name).toBeInTheDocument();
  const amount = screen.getByText(/\$120/);
  expect(amount).toBeInTheDocument();
  const reward = screen.getByText(/90/);
  expect(reward).toBeInTheDocument();
  const date = screen.getByText(/09.04.2023, 22:50/);
  expect(date).toBeInTheDocument();
});
