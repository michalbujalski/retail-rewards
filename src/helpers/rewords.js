const FIRST_THRESHOLD = 50;
const SECOND_THRESHOLD = 100;

const calcFirstThreshold = (amount) => {
  return Math.floor(amount) - FIRST_THRESHOLD;
};

const calcSecondThreshold = (amount) => {
  return (
    2 * (Math.floor(amount) - SECOND_THRESHOLD) +
    calcFirstThreshold(SECOND_THRESHOLD)
  );
};

export const calculateReward = (amount) => {
  if (amount >= FIRST_THRESHOLD && amount <= SECOND_THRESHOLD) {
    return calcFirstThreshold(amount);
  } else if (amount > SECOND_THRESHOLD) {
    return calcSecondThreshold(amount);
  } else {
    return 0;
  }
};
