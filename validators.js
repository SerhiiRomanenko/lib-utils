// validators.js

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPassword = (password) => {
  // Пароль повинен містити мінімум 8 символів, принаймні одну велику літеру, одну малу літеру, одну цифру та один спеціальний символ
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
  return passwordRegex.test(password);
};

export const isNotEmpty = (value) => {
  return value !== null && value !== undefined && String(value).trim() !== '';
};

export const isNumber = (value) => {
  return !isNaN(parseFloat(value)) && isFinite(value);
};