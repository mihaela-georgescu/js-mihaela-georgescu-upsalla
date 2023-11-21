console.log(process.argv);
const type = ['circle', 'square', 'rectangle', '-h', '-clear'];

let [, , shape = [''], sideA, sideB] = process.argv;
sideA = Number(sideA);
sideB = Number(sideB);

let circleSurface = Math.PI * Math.pow(sideA, 2);
let squareSurface = Math.pow(sideA, 2);
let rectangleSurface = sideA * sideB;
let message = '';

if (shape === type[0] || shape === type[1]) {
  if (isNaN(sideA)) {
    console.log(
      `Error, please input the value to calculate the ${shape}'s surface.`,
    );
  } else {
    if (!isNaN(sideB)) {
      console.log(`Error, please input only one value.`);
    } else {
      if (shape === type[0]) {
        console.log(`The surface of the ${shape} is ${circleSurface}`);
      } else {
        console.log(`The surface of the ${shape} is ${squareSurface}`);
      }
    }
  }
}

if (shape === type[2]) {
  if (isNaN(sideA) || isNaN(sideB)) {
    console.log('Error, please input the sideA and sideB of the rectangle.');
  } else {
    console.log(`The surface of the ${shape} is ${rectangleSurface}`);
  }
}

if (shape === type[3]) {
  console.log(
    `You can calculate the surface of a circle, square or rectangle. For example, for the value 3, the surface of the circle will be 28.274333882308138, the surface of the square will be 9, and for a rectangle with the values 3 and 4, the answer will be 12.`,
  );
}

const { writeFileSync, readFileSync, appendFileSync } = require('fs');

if (shape === type[4]) {
  writeFileSync('./log.txt', '', 'utf-8');
} else {
  message = shape + ', ' + sideA + ', ' + sideB + '\r\n';

  appendFileSync('./log.txt', message, 'utf-8');
}
