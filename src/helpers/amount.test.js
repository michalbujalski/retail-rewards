import { formatAmount } from './amount';

describe('format amount', () => {
  it('should return amount in USD', () => {
    const amount = 100;
    const formattedAmount = formatAmount(amount);
    expect(formattedAmount).toEqual('$100.00');
  });
});
