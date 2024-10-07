export const heongyu = (callback) => {
  const repeater = setInterval(async () => {
    const promiseArray = Array.from({ length: 100 }, () => setRepeat(callback));
    await Promise.all(promiseArray);
  }, 150);
  setTimeout(async () => {
    clearInterval(repeater);
  }, 5000);
};

const setRepeat = (callback) => {
  for (let i = 0; i < 100; i++) {
    callback();
  }
};
