/**
 * Utility functions for data generation
 */

export const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomLetter = () => String.fromCharCode(65 + Math.floor(Math.random() * 26));

export const getRandomDigit = () => Math.floor(Math.random() * 10).toString();

export const getRandomAlphaNum = () => Math.random() > 0.5 ? getRandomLetter() : getRandomDigit();

export const capitalizeFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const formatCurrency = (amount) => {
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(2)} Cr`;
  } else if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(1)} L`;
  } else if (amount >= 1000) {
    return `₹${(amount / 1000).toFixed(1)} K`;
  }
  return `₹${amount}`;
};
