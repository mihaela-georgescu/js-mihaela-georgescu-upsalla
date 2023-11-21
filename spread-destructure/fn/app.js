function domLog() {
  // arguments work
  let message = '';

  for (let i = 0; i < arguments.length; ++i) {
    message += arguments[i] + ' ';
  }

  if (message.length < 1) {
    return;
  }

  const p = document.createElement('p');
  p.innerText = message;
  document.body.append(p);
}

domLog('hello');
domLog('hello', 'world');
domLog('hello', 'world', 'I');
domLog('hello', 'world', 'I', 'code');

const domLog2 = (...arguments) => {
  // arguments don't work
  let message = '';

  for (let i = 0; i < arguments.length; ++i) {
    message += arguments[i] + ' ';
  }

  if (message.length < 1) {
    return;
  }

  const p = document.createElement('p');
  p.innerText = message;
  document.body.append(p);
};

domLog('hello');
domLog('hello', 'world');
domLog('hello', 'world', 'I');
domLog('hello', 'world', 'I', 'code');
