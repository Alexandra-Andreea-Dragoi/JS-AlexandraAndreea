function paragraphLog(message) {
  const logContainerClass = 'logs';
  let logContainer = document.querySelector('.' + logContainerClass);

  if (logContainer === null) {
    logContainer = document.createElement('div');
    logContainer.classList.add(logContainerClass);
    document.body.append(logContainer);
  }

  const messageParagraph = document.createElement('p');
  messageParagraph.innerText = message;
  logContainer.append(messageParagraph);
}

console.domLog = paragraphLog;

console.domLog('Nu apar in consola.');

// Modifica exercitiul 06 astfel incat functia sa primeasca un numar nedeterminat de parametri, similar cu console.log(). Foloseste variabila arguments a functiei pentru a rula o bucla prin parametri.

// for (let i = 0; i < arguments.length; i++) {
//   message += arguments[i] + punctuation
// }

// Nu o vad pe asta, nu stiu sa o fac :((
