
const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1941, end: 2004},
    {name: "Company Three", category: "Auto", start: 1891, end: 2010},
    {name: "Company Four", category: "Technology", start: 1935, end: 2019},
    {name: "Company Five", category: "Auto", start: 1981, end: 2003},
    {name: "Company Six", category: "Finance", start: 1981, end: 2003}
];

const ages = [33, 44, 22, 64, 39, 95, 35, 75, 46, 94];

// Example of for
// for(let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

// High order functions

// forEach function

companies.forEach((company) => {
    console.log(company.name);
});

// filter function

// const applyForRetiring = ages.filter(function(age) {
//     if (age >= 45) {
//         return true;
//     }
// });

// another way to do the same in one single line using arrow functions

const applyForRetiring = ages.filter(age => age >= 45);

console.log(applyForRetiring);

// Filter Auto companies

const autoCompanies = companies.filter(company => company.category === 'Auto');
console.log(autoCompanies);


// map function

// Create array of companies with a format 'name [start - end]'

const companiesFormatted = companies.map(function(company) {
    return `${company.name} [${company.start} - ${company.end}]`;
});

console.log(companiesFormatted);

const agesSquare = ages.map(age => Math.sqrt(age));
console.log(agesSquare);



// sort function

// Create an array of sorted companies by start year

const sortedCompanies = companies.sort(function(c1, c2) {
    if (c1.start > c2.start) {
        return 1;
    } else {
        return -1;
    }
});

console.log(sortedCompanies);

// Sort ages

const sortAges = ages.sort((a, b) => (a - b));
console.log(sortAges);


// Reduce function

const totalYears = companies.reduce((total, company) => {
    return total + (company.end - company.start);
}, 0);

console.log(totalYears);

// Combine methods

const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0);

console.log(combined);