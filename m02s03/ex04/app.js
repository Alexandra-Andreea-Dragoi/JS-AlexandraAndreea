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

const imageFullUrl = document.querySelector('.image').src;

image.addEventListener('click', function (event) {
  const target = event.currentTarget;
  showMessage(`Imaginea cu URL-ul: ${target} s-a incarcat`);
});
