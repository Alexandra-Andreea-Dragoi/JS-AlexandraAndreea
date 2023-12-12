const controls = document.querySelector('.controls');
// const box = document.querySelector('.box');
const colorInput = controls.querySelector('.color-input');
const resetButton = controls.querySelector('.reset-button');
const container = document.querySelector('.container');
const boxes = container.querySelectorAll('input[name="box"]');

//event delegation
controls.addEventListener('click', function (event) {
  // event.target = elementul de pe care a plecat clickul
  const target = event.target;

  // early return
  if (
    target.nodeName !== 'BUTTON' ||
    !target.dataset.color ||
    target.dataset.color.trim().length <= 0
  ) {
    return;
  }

  const button = target;
  const color = button.dataset.color;

  boxes.forEach(function (box) {
    if (box.checked) {
      box.parentElement.style.backgroundColor = color;
    }
  });
});

colorInput.addEventListener('change', function (event) {
  // este change pentru ca masuram schimbarile
  // dom traversal
  const input = event.currentTarget;
  const button = input.nextElementSibling;
  const value = input.value;

  if (/^#([0-9A-Fa-f]{3}){1,2}$/.test(value)) {
    button.dataset.color = value;
    button.style.backgroundColor = value;
  } else {
    const paragraph = document.createElement('p');
    const text = document.createTextNode('Wrong hex');
    paragraph.appendChild(text);
    paragraph.style.color = '#AA1803';
    document.body.appendChild(paragraph);
  }
});

resetButton.addEventListener('click', function () {
  boxes.forEach(function (box) {
    box.parentElement.removeAttribute('style');
  });
});
