function myNameVS(teamNames, teamFunctions) {
  const counts = {};
  let stop = false;

  teamNames.forEach((name) => (counts[name] = 0));
  const stopSignal = () => stop;

  setTimeout(() => {
    stop = true;
  }, 5000);

  const promises = teamFunctions.map((func, index) => {
    return new Promise((resolve) => {
      try {
        func(() => {
          if (!stop) {
            counts[teamNames[index]]++;
            if (counts[teamNames[index]] % 100 === 0) {
              setTimeout(() => {}, 1);
            }
          }
        }, stopSignal);
      } catch (e) {
        console.error(`${teamNames[index]} 님의 함수에서 에러가 발생했습니다:`, e);
      } finally {
        setTimeout(() => resolve(), 5000);
      }
    });
  });

  Promise.all(promises).then(() => {
    teamNames.forEach((name) => {
      console.log(`${name} 님은 ${counts[name]}번 이름을 출력했습니다.`);
    });
    const winner = teamNames.reduce((prev, current) =>
      counts[prev] > counts[current] ? prev : current
    );
    console.log(`승자는 ${winner} 님입니다!`);
  });
}
