#!/usr/bin/env node

const program = require('commander');

program
  .version('0.1.0')
  .option('-r, --rows <n>', 'Amount of rows to generate')
  .option('-m, --max <n>', 'Max random number')
  .parse(process.argv);

Math.GCD = function(a, b) {
    if (!b) {
        return a;
    }

    return Math.GCD(b, a % b);
};


function calculatePi(rows, maxRand) {
    let numberOfGTD = 0;

    for(let i = 0; i < rows; i++) {
        const rand_1 = Math.ceil(Math.random() * maxRand)
        const rand_2 = Math.ceil(Math.random() * maxRand)

        if(Math.GCD(rand_1, rand_2) === 1) {
            numberOfGTD++
        }
    }

    const probability = numberOfGTD / rows;

    return Math.sqrt(6 / probability)
}

const guessed_pi = calculatePi(program.rows, program.max);
const real_pi = Math.PI;
const difference = real_pi - guessed_pi;

console.log(`
Guessed: ${guessed_pi}
Real Pi: ${real_pi}
Difference: ${difference}
Percent Difference: ${100 - (guessed_pi/real_pi * 100)}%
`)
