import { formatDate, getPastMonthTransactions } from './date';

describe('format date', () => {
  it('should return date in format MM.DD.YYYY HH:MM', () => {
    const date = '2021-01-01T00:00:00.000';
    const formattedDate = formatDate(date);
    expect(formattedDate).toEqual('01.01.2021, 00:00');
  });
});

describe('get past months', () => {
  it('should return objects from last two months', () => {
    const transactions = [
      {
        timestamp: '2022-12-21T00:00:00.000'
      },
      {
        timestamp: '2022-12-01T00:00:00.000'
      },
      {
        timestamp: '2022-11-17T00:00:00.000'
      },
      {
        timestamp: '2022-11-07T00:00:00.000'
      },
      {
        timestamp: '2022-11-03T00:00:00.000'
      },
      {
        timestamp: '2022-10-23T00:00:00.000'
      },
      {
        timestamp: '2022-09-27T00:00:00.000'
      },
      {
        timestamp: '2022-09-11T00:00:00.000'
      },
      {
        timestamp: '2022-09-01T00:00:00.000'
      },
      {
        timestamp: '2022-08-01T00:00:00.000'
      }
    ];

    const pastMonths = getPastMonthTransactions(transactions, 2);
    expect(JSON.stringify(pastMonths)).toEqual(
      JSON.stringify([
        {
          timestamp: '2022-12-21T00:00:00.000'
        },
        {
          timestamp: '2022-12-01T00:00:00.000'
        },
        {
          timestamp: '2022-11-17T00:00:00.000'
        },
        {
          timestamp: '2022-11-07T00:00:00.000'
        },
        {
          timestamp: '2022-11-03T00:00:00.000'
        }
      ])
    );
  });
});
