const showMessage = function (message) {
  const messageContainer = document.createElement('p');
  messageContainer.innerText = message;

  document.body.prepend(messageContainer);
};

document.addEventListener('DOMContentLoaded', function () {
  const initialWindowSurface = window.innerWidth * window.innerHeight;
  showMessage(`Fereastra are ${initialWindowSurface}px`);
});

// measure window at load time
let oldWidth = window.innerWidth;
let oldHeight = window.innerHeight;

const debouncedResizeHandler = debounce(function () {
  const currentWidth = window.innerWidth;
  showMessage(`Fereastra are dimensiunde orizontala de ${currentWidth}px`);
  const currentHeight = window.innerHeight;
  showMessage(`Fereastra are dimensiunde verticala de ${currentHeight}px`);

  if (oldWidth !== currentWidth && oldHeight !== currentHeight) {
    let windowSurface = currentWidth * currentHeight;
    showMessage(`Fereastra are suprafata de ${windowSurface}px`);
  }

  oldWidth = currentWidth;
  oldHeight = currentHeight;
}, 50);

window.addEventListener('resize', debouncedResizeHandler);
