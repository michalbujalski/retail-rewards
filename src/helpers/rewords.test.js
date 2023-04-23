import { calculateReward } from './rewords';

describe('calculat reword for transaction', () => {
  it('should return 0 if transaction below $50', () => {
    const amount = 49;
    const reward = calculateReward(amount);
    expect(reward).toEqual(0);
  });
  it('should return 1 if transaction above $50 and below $100', () => {
    const amount = 51;
    const reward = calculateReward(amount);
    expect(reward).toEqual(1);
  });
  it('should return 2 for each dollar above 100 and 1 for amount between $50 and $100', () => {
    const amount = 150;
    const reward = calculateReward(amount);
    expect(reward).toEqual(100);
  });
});
