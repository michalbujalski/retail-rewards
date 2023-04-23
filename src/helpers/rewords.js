export const calculateReward = (amount) => {
  if (amount >= 50 && amount <= 100) {
    return 1;
  } else if (amount > 100) {
    return 2 * (amount - 100);
  } else {
    return 0;
  }
};
