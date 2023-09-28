var services = [
  {
    name: 'Mailchimp',
    adoption: 2010,
  },
  {
    name: 'Google Analytics',
    adoption: 2009,
  },
  {
    name: 'Stripe',
    adoption: 2020,
  },
  {
    name: 'Hotjar',
    adoption: 2021,
  },
  {
    name: 'Sendgrid',
    adoption: 2022,
  },
];

console.warn(`
Folosind for, afiseaza in consola propozitia “Siteul foloseste urmatoarele servicii: a, b, c, d si e.”
`);
let message = `Siteul foloseste urmatoarele servicii: `;
let punctuation = `, `;
for (let i = 0; i < services.length; i++) {
  if (i === services.length - 2) {
    punctuation = ` si `;
  }

  if (i === services.length - 1) {
    punctuation = `.`;
  }

  message += `${services[i].name}${punctuation}`;
}

console.log(message);

console.warn(`
Afiseaza doar numele serviciilor integrate dupa 2020 intr-o propozitie de forma “Serviciile a, b, c au fost adoptate dupa 2020 inclusiv.”
`);
let message2 = `Serviciile `;
let punctuation2 = `, `;
for (let i = 0; i < services.length; i++) {
  if (i === services.length - 1) {
    punctuation2 = ` `;
  }

  if (services[i].adoption >= 2020) {
    message2 += `${services[i].name}${punctuation2}`;
  }
}

console.log(message2 + `au fost adoptate dupa 2020 inclusiv.`);

console.warn(`
Afiseaza doar pentru serviciile de pe pozitii pare, cate una pe linie, propozitii de forma “Serviciul se numeste xxx si a fost integrat in yyyy.”
`);
for (let i = 0; i < services.length; i++) {
  let service = services[i];
  if (i % 2 === 0) {
    console.log(
      `Serviciul se numeste ${service.name} si a fost integrat in ${service.adoption}.`,
    );
  }
}

console.warn(`
Folosind anul curent afiseaza propozitii de forma “Siteul foloseste serviciul xxx de yyy ani.”
`);
for (let i = 0; i < services.length; i++) {
  let service = services[i];
  let usage = 2023 - service.adoption;
  console.log(`Siteul foloseste serviciul ${service.name} de ${usage} ani.`);
}

console.warn(`
Gaseste cel mai vechi serviciu si afiseaza o propozitie de forma “Folosim xxx de yyy ani.”
`);
let oldestService = services[0];
for (let i = 0; i < services.length; i++) {
  if (oldestService.adoption > services[i].adoption) {
    oldestService = services[i];
  }
}

let longestUsage = 2023 - oldestService.adoption;

console.log(`Folosim ${oldestService.name} de ${longestUsage} ani.`);
