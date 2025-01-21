const readline = require('readline');

const EXCHANGE_RATE = 83.0; // Fixed rate for INR to USD

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Currency Converter (INR to USD)");
console.log(`Exchange Rate: 1 USD = ${EXCHANGE_RATE} INR`);
console.log("Type 'exit' to quit.\n");

const promptUser = () => {
    rl.question('Enter amount (INR): ', (input) => {
        if (input.toLowerCase() === 'exit') {
            console.log("Goodbye!");
            rl.close();
            return;
        }

        const inr = parseFloat(input);
        if (isNaN(inr)) {
            console.log('Invalid input. Please enter a valid number.\n');
        } else {
            const usd = (inr / EXCHANGE_RATE).toFixed(2);
            console.log(`INR ${inr} = USD ${usd}\n`);
        }
        
        promptUser();
    });
};

promptUser();