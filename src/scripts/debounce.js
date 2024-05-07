export const debounce = (fn, ms) => {
  let idTimeout;

  return (...args) => {
    clearInterval(idTimeout);

    idTimeout = setTimeout(() => {
      fn(...args);
    }, ms);
  };
};
