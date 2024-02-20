// black box function with no side effects
function createLog(message) {
  const messageContainer = document.createElement('p');
  messageContainer.innerText = message;

  return messageContainer;
}

function sidesLog() {
  sideCounter = sideCounter + 1;
  const sideLog = createLog(
    `Mouse-ul a trecut peste laturile scenei de ${sideCounter} ori.`,
  );
  sideLog.style.color = 'blue';
  logsContainer.append(sideLog);
}

const stage = document.querySelector('.pane .stage');
const logsContainer = document.querySelector('.logs');
let counter = 0;
let sideCounter = 0;

stage.addEventListener('mouseover', function () {
  const log = createLog('Mouseul este pe scena');
  counter = counter + 1;

  const counterLog = createLog(`Mouseul a fost pe scena de ${counter} ori.`);
  logsContainer.append(log);
  logsContainer.append(counterLog);

  sidesLog();
});

stage.addEventListener('mouseout', function () {
  const log = createLog('Mouseul NU este pe scena');

  logsContainer.append(log);

  sidesLog();
});
