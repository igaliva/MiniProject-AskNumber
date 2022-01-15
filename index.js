// Make the computer choose a number between 1 and 100

function randomNumber() {
    const pcNumber = Math.floor(Math.random()*100) + 1;
    return pcNumber;
}

// Make it ask the user to guess the computer number

function chooseNumber() {
    let choice = prompt('Guess the computer number from 1 to 100'); 
    return choice;
}

// Continue asking the number until user find it by giving gim hints: TOO BIG, TOO SMALL

function main() {
    pcNumber = randomNumber();
    let userNumber;

    while (pcNumber != userNumber) {
        userNumber = chooseNumber();

        if (pcNumber > userNumber) alert('TOO SMALL');
        else if (pcNumber < userNumber) alert('TOO BIG');
        else if (pcNumber == userNumber) alert('Congradulation you guessed the number');
    }
}

// Run the program
main();