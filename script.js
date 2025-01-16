const button = document.querySelector("button");

function greet(){
    const name = prompt("what is your name?");
    const greeting = querySelector("#greeting");
    greeting.textContent = `Hello ${name}, nice to see you"`;
}

button.addEventListener("click", greet);

const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log (output);

const newline = `One day you finally knew
what you had to do, and began,`;
console.log(newline);

// ``also know as template literals will let you write strings that span multiple lines