const button = document.querySelector("button");

function greet(){
    const name = prompt("what is your name?");
    const greeting = querySelector("#greeting");
    greeting.textContent = `Hello ${name}, nice to see you"`;
}

button.addEventListener("click", greet);