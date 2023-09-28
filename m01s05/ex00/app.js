const metricSpeeds = [10, 60, 100, 180, 850, 1000];

const centigradeTemperatures = [0, 100, -30, 16, -273, 1000];

const metricDistances = [1, 10, 100, 1000, 1500];

console.warn(`
  Afiseaza cate una pe linie propozitii de forma “10km/h inseamna xxxm/s sau yyymph.”.  Stiind ca formula pentru a calcula metri pe secunda
  este:  kmh * 5 / 18 si mile pe ora este: kmh * 1.609344
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
  Aduna toate valorile din array si afiseaza o propozitie de forma: “xxxkm/h inseamna yyymph.”.
`);
let totalSpeeds = 0;

for (let i = 0; i < metricSpeeds.length; i++) {
  const speed = metricSpeeds[i];
  totalSpeeds += speed;
}

console.log(`${totalSpeeds}km/h inseamna ${kmhtomph(totalSpeeds)}mph.`);

console.warn(`
  In mod similar afiseaza propozitii de forma “0 grade celsius inseamna xxx grade kelvin sau yyy grade Fahrenheit.” Stiind ca formula
  pentru a calcula gradele Fahrenheit este (x° * 9 / 5) + 32 iar pentru kelvin: x° + 273.15
`);
function fahrenheit(F) {
  return (F * 9) / 5 + 32;
}

function kelvin(k) {
  return k + 273.15;
}

for (let i = 0; i < centigradeTemperatures.length; i++) {
  const temperature = centigradeTemperatures[i];

  console.log(
    `${temperature} grade celsius inseamna ${kelvin(
      temperature,
    )} grade kelvin sau ${fahrenheit(temperature)} grade Fahrenheit.`,
  );
}

console.warn(`
Aduna toate valorile din array si afiseaza o propozitie de forma: “xxx grade celsius inseamna yyy grade kelvin.”.
`);
let totalTemps = 0;

for (let i = 0; i < centigradeTemperatures.length; i++) {
  const temperature = centigradeTemperatures[i];
  totalTemps += temperature;
}

console.log(
  `${totalTemps} grade celsius inseamna ${kelvin(totalTemps)} grade kelvin.`,
);
console.warn(`
Pentru distante afiseaza propozitii de forma “1m inseamna xxx inch sau yyy picioare.”. Stiind ca un metru este 39.3701 inch si 3.281 picioare.
`);
function inches(inch) {
  return inch * 39.3701;
}

function feet(ft) {
  return ft * 3.281;
}

for (let i = 0; i < metricDistances.length; i++) {
  const distance = metricDistances[i];

  console.log(
    `${distance}m inseamna ${inches(distance)} inch sau ${feet(
      distance,
    )} picioare.`,
  );
}

console.warn(`
Aduna toate valorile din array si afiseaza o propozitie de forma “xxxm inseamna yyy mile.”. Stiind ca formula este: m / 1609
`);
totalDistances = 0;

for (let i = 0; i < metricDistances.length; i++) {
  const distance = metricDistances[i];
  totalDistances += distance;
}

function miles(mile) {
  return mile / 1609;
}

console.log(`${totalDistances}m inseamna ${miles(totalDistances)} mile.`);
