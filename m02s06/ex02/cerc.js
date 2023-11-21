console.log(process.argv);
let radius = process.argv[2];
radius = Number(radius);

console.log(Math.PI * Math.pow(radius, 2));
