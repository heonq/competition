export const hyuckjin = (printName, stopSignal) => {
  const intervalId = setInterval(() => {
      if (!stopSignal()) {
          printName();
      } else {
          clearInterval(intervalId);
      }
  }, 150); 
};
