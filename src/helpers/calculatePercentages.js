// Provide initial and final value and number of decimail places to roundTo.
// returns string representation of the number as a percentage

const calculatePercentage = (initialValue, finalValue, roundTo) => {
  return (((finalValue - initialValue) / initialValue) * 100).toFixed(roundTo);
};

export default calculatePercentage;
