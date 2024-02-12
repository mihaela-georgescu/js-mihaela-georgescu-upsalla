function paragraphLog() {
  const logContainerClass = 'logs';
  let logContainer = document.querySelector('.' + logContainerClass);

  if (logContainer === null) {
    logContainer = document.createElement('div');
    logContainer.classList.add(logContainerClass);
    document.body.append(logContainer);
  }

  const messageParagraph = document.createElement('p');

  let message = '';
  let punctuation = ', ';

  if (arguments.length === 1) {
    message = arguments;
  } else {
    for (let i = 0; i < arguments.length; i++) {
      if (i === arguments[i] - 1) {
        punctuation = '';
      }

      message += arguments[i] + punctuation;
    }
  }

  messageParagraph.innerText = message;
  logContainer.append(messageParagraph);
}

console.domLog = paragraphLog;

console.domLog('Nu apar in consola.', 'Nici eu.', 'Nici eu.');
