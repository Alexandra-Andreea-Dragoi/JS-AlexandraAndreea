const image = document.querySelector('.image');

function showMessage(message) {
  const messageContainer = document.querySelector('p');
  messageContainer.innerText = message;

  // side effect
  document.body.append(messageContainer);
  return messageContainer;
}

image.addEventListener('load', function () {
  showMessage('Imaginea s-a incarcat');
});

image.addEventListener('click', function () {
  showMessage(
    'Imaginea cu URL-ul: https://colorpalettes.net/wp-content/uploads/2022/08/color-palette-4573.png s-a incarcat',
  );
});
