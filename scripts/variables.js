var score;

let rate;

const minScore = 0;

rate = minScore + 2;

score = rate + 3;

// Old way of concatenation
console.log('score: ' + score + ', rate: ' + rate + ', mininum score: ' + minScore);

// Modern way of concatenation
const message = `score: ${score}, rate: ${rate}, mininum score: ${minScore}`;
console.log(message);