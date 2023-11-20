// black box function with no side effects
function createLog(message) {
  const messageContainer = document.createElement('p');
  messageContainer.innerText = message;

  return messageContainer;
}

const stage = document.querySelector('.pane .stage');
const stage1 = document.querySelector('.pane1 .stage1');
const logsContainer = document.querySelector('.logs');
const logsContainer2 = document.querySelector('.logs2');
let counter = 0;
let counterOut = 0;
let counterLines = 0;

////////////////////////////////

// pentru Alexandra
// De la Vesko variante DRY invatare suplimentara:

// function cccc(ev) {
//   counterLines = counterLines + 1;

//   const log = createLog(` ${ev} line pass ${counterLines} times`);
//   logsContainer2.append(log);
// }

// vesriunea 1

// stage.addEventListener('mouseover', function () {
//   cccc('over');
// });
// stage.addEventListener('mouseout', function () {
//   cccc('out');
// });

// versiunea 2

// ['mouseenter', 'mouseleave'].forEach((event) =>
//   stage.addEventListener(event, function () {
//     cccc(event);
//   }),
// );

///////////////////////////

// curs si solutia mea la a numara de cate ori trece mouseul peste oricare din linii.

stage.addEventListener('mouseover', function () {
  const log = createLog('Mouseul este pe scena');
  counter = counter + 1;

  const counterLog = createLog(`Mouseul a fost pe scena de ${counter} ori.`);

  logsContainer.append(log);
  logsContainer.append(counterLog);
});

stage.addEventListener('mouseout', function () {
  const log = createLog('Mouseul NU este pe scena');
  counterOut = counterOut + 1;

  const counterOutLog = createLog(
    `Mouseul a iesit pe scena de ${counterOut} ori.`,
  );

  logsContainer.append(log);
  logsContainer.append(counterOutLog);
});

// solutia mea
['mouseenter', 'mouseleave'].forEach((event) =>
  stage.addEventListener(event, function () {
    counterLines = counterLines + 1;
    const counterOverLines = createLog(
      `Mouseul a trecut peste linii de ${counterLines} ori.`,
    );
    logsContainer2.append(counterOverLines);
  }),
);
