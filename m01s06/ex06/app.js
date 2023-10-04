function paragraphLog(...arguments) {
  let message = '';
  let punctuation = ', ';
  const logContainerClass = 'logs';
  let logContainer = document.querySelector('.' + logContainerClass);

  if (logContainer === null) {
    logContainer = document.createElement('div');
    logContainer.classList.add(logContainerClass);
    document.body.append(logContainer);
  }

  for (let i = 0; i < arguments.length; i++) {
    if (i === arguments.length - 1) {
      punctuation = '';
    }

    message += arguments[i] + punctuation;
  }

  const messageParagraph = document.createElement('p');
  messageParagraph.innerText = message;
  logContainer.append(messageParagraph);
}

console.domLog = paragraphLog;

console.domLog(
  'Nu apar in consola.',
  'Nici eu nu apar in consola.',
  'Nici eu.',
);
