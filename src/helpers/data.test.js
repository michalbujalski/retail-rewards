import { formatDate } from './date';

describe('format date', () => {
  it('should return date in format MM.DD.YYYY HH:MM', () => {
    const date = '2021-01-01T00:00:00.000';
    const formattedDate = formatDate(date);
    expect(formattedDate).toEqual('01.01.2021, 00:00');
  });
});
