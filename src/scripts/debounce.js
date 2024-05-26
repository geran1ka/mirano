export const debounce = (fn, ms) => {
  let idTimeout;

  return (...args) => {
    clearTimeout(idTimeout);

    idTimeout = setTimeout(() => {
      fn(...args);
    }, ms);
  };
};
