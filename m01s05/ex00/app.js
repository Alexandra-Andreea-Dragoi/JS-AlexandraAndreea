const metricSpeeds = [10, 60, 100, 180, 850, 1000];

const centigradeTemperatures = [0, 100, -30, 16, -273, 1000];

const metricDistances = [1, 10, 100, 1000, 1500];

console.warn(`
  Afiseaza cate una pe linie propozitii de forma
  “10km/h inseamna xxxm/s sau yyymph.”.
  Stiind ca formula pentru a calcula metri pe secunda este:
  kmh * 5 / 18 si mile pe ora este: kmh * 1.609344
`);

function kmhtomps(kmh) {
  return (kmh * 5) / 18;
}

function kmhtomph(kmh) {
  return kmh * 1.609344;
}

for (let i = 0; i < metricSpeeds.length; i++) {
  const speed = metricSpeeds[i];

  console.log(
    `${speed}km/h inseamna ${kmhtomps(speed)}m/s sau ${kmhtomph(speed)}mph.`,
  );
}

console.warn(`
  Aduna toate valorile din array si afiseaza
  o propozitie de forma: “xxxkm/h inseamna yyymph.”.
`);
let totalSpeeds = 0;
for (let i = 0; i < metricSpeeds.length; i++) {
  const speed = metricSpeeds[i];

  totalSpeeds += speed;
}
console.log(`${totalSpeeds}km/h inseamna ${kmhtomph(totalSpeeds)}mph.`);

console.warn(
  `In mod similar afiseaza propozitii de forma “0 grade celsius inseamna xxx grade kelvin sau yyy grade Fahrenheit.” Stiind ca formula pentru a calcula gradele Fahrenheit este (x° * 9 / 5) + 32 iar pentru kelvin: x° + 273.15`,
);

function celtokelv(cel) {
  return cel + 273.15;
}

function celtofahre(cel) {
  return (cel * 9) / 5 + 32;
}

for (let i = 0; i < centigradeTemperatures.length; i++) {
  const degr = centigradeTemperatures[i];

  console.log(
    `${centigradeTemperatures[i]} grade celsius inseamna ${celtokelv(
      degr,
    )} grade kelvin sau ${celtofahre(degr)} grade Fahrenheit.`,
  );
}

console.warn(
  `Aduna toate valorile din array si afiseaza o propozitie de forma: “xxx grade celsius inseamna yyy grade kelvin.”.`,
);

let totalDegr = 0;
for (let i = 0; i < centigradeTemperatures.length; i++) {
  const degr = centigradeTemperatures[i];
  totalDegr += degr;
}
console.log(
  `${totalDegr} grade celsius inseamna ${celtokelv(totalDegr)} grade kelvin.`,
);

console.warn(
  `Pentru distante afiseaza propozitii de forma “1m inseamna xxx inch sau yyy picioare.”. Stiind ca un metru este 39.3701 inch si 3.281 picioare.`,
);
function mtoinch(m) {
  return m * 39.3701;
}

function mtoleg(m) {
  return m * 3.281;
}

function mtomile(m) {
  return m / 1609;
}

for (let i = 0; i < metricDistances.length; i++) {
  const dist = metricDistances[i];
  console.log(
    `${dist}m inseamna ${mtoinch(dist)} inch sau ${mtoleg(dist)} picioare.`,
  );
}

console.warn(
  `Aduna toate valorile din array si afiseaza o propozitie de forma “xxxm inseamna yyy mile.”. Stiind ca formula este: m / 1609`,
);

let totalDist = 0;
for (let i = 0; i < metricDistances.length; i++) {
  totalDist += metricDistances[i];
}
console.log(`${totalDist}m inseamna ${mtomile(totalDist)} mile.`);
