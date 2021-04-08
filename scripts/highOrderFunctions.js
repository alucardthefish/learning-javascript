
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