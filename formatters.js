// formatters.js

export const formatDate = (dateString, locale = 'uk-UA', options = {}) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  const defaultOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Intl.DateTimeFormat(locale, { ...defaultOptions, ...options }).format(date);
};

export const formatCurrency = (amount, currency = 'UAH', locale = 'uk-UA') => {
  if (typeof amount !== 'number') return '';
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);
};

export const truncateText = (text, maxLength) => {
  if (!text || text.length <= maxLength) {
    return text;
  }
  return `${text.substring(0, maxLength)}...`;
};

export const capitalizeFirstLetter = (string) => {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
};