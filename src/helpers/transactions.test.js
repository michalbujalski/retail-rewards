import { splitTransactionsPerMonth } from './transactions';

describe('split transactions per month', () => {
  it('should return an object with the transactions split per month', () => {
    const transactions = [
      {
        timestamp: '2021-01-01T00:00:00.000'
      },
      {
        timestamp: '2021-01-01T00:00:00.000'
      },
      {
        timestamp: '2021-02-01T00:00:00.000'
      }
    ];
    const transactionsPerMonth = splitTransactionsPerMonth(transactions);
    expect(transactionsPerMonth).toEqual({
      '01': [
        {
          timestamp: '2021-01-01T00:00:00.000'
        },
        {
          timestamp: '2021-01-01T00:00:00.000'
        }
      ],
      '02': [
        {
          timestamp: '2021-02-01T00:00:00.000'
        }
      ]
    });
  });
});
