// let step = 0;  // Keeps track of the current prompt step
// let passwordOptions = {};

// // Automatically focus on the input element when the page loads
// document.addEventListener("DOMContentLoaded", () => {
//     let inputField = document.getElementById("input");
//     inputField.focus();
//     let output = document.getElementById("output");
//     output.innerHTML = `<div class="prompt-text">Type 'generate password' to start generating your password.</div>`;
// });

// document.getElementById("input").addEventListener("keypress", function (e) {
//     if (e.key === "Enter") {
//         let userInput = e.target.value;
//         e.target.value = "";  // Clear the input after pressing enter
//         handleInput(userInput);
//     }
// });

// function handleInput(input) {
//     let output = document.getElementById("output");

//     // Clear command: Reset terminal but don't restart password process
//     if (input.toLowerCase() === "clear") {
//         output.innerHTML = "";
//         output.innerHTML += `<div class="prompt-text">Type 'generate password' to start generating your password.</div>`; // Keep the original prompt
//         output.scrollTop = output.scrollHeight;
//         step = 0; // Reset step so it can start fresh
//         return; // Just clear the screen and reset
//     }

//     // Add the custom symbol before user input
//     let formattedInput = `૮꒰ ˶• ༝ •˶꒱ა ♡ ${input}`;

//     output.innerHTML += `<div class="command">${formattedInput}</div>`;

//     switch (step) {
//         case 0:
//             if (input.toLowerCase() === "generate password") {
//                 output.innerHTML += `<div class="prompt-text">Please enter the password length:</div>`;
//                 step++;
//             } else {
//                 output.innerHTML += `<div class="error">Invalid command. Type 'generate password' to begin.</div>`;
//             }
//             break;

//         case 1:
//             // Password length validation (must be a valid number)
//             let length = parseInt(input);
//             if (isNaN(length) || length <= 0) {
//                 output.innerHTML += `<div class="error">Invalid input. Please enter a valid number for the password length.</div>`;
//                 return;  // Do not proceed until valid input is provided
//             }
//             passwordOptions.minLength = length;
//             output.innerHTML += `<div class="prompt-text">Should the password include numbers? (yes/no):</div>`;
//             step++;
//             break;

//         case 2:
//             // Number validation (only accept "yes" or "no")
//             if (input.toLowerCase() === "yes") {
//                 passwordOptions.hasNumber = true;
//             } else if (input.toLowerCase() === "no") {
//                 passwordOptions.hasNumber = false;
//             } else {
//                 output.innerHTML += `<div class="error">Invalid input. Please answer 'yes' or 'no' for numbers.</div>`;
//                 return;  // Do not proceed until valid input is provided
//             }
//             output.innerHTML += `<div class="prompt-text">Should the password include special characters? (yes/no):</div>`;
//             step++;
//             break;

//         case 3:
//             // Special character validation (only accept "yes" or "no")
//             if (input.toLowerCase() === "yes") {
//                 passwordOptions.hasSpecial = true;
//             } else if (input.toLowerCase() === "no") {
//                 passwordOptions.hasSpecial = false;
//             } else {
//                 output.innerHTML += `<div class="error">Invalid input. Please answer 'yes' or 'no' for special characters.</div>`;
//                 return;  // Do not proceed until valid input is provided
//             }
//             generatePassword(passwordOptions);  // Now pass the fully constructed options
//             step = 4;  // After password generation, set step to 4 to ask for "Do you want to generate another password?"
//             break;

//         case 4:
//             // Handle whether the user wants to generate another password
//             if (input.toLowerCase() === "yes") {
//                 // Continue from the last step (skip the starting part of the flow)
//                 output.innerHTML += `<div class="prompt-text">Should the password include numbers? (yes/no):</div>`;
//                 step = 2;  // Restart from asking about numbers
//             } else if (input.toLowerCase() === "no") {
//                 output.innerHTML += `<div class="prompt-text">Thank you for using the password generator. Goodbye!</div>`;
//                 step = 0;  // Reset to start
//             } else {
//                 output.innerHTML += `<div class="error">Invalid command. Please answer 'yes' or 'no'.</div>`;
//                 return;
//             }
//             break;

//         default:
//             output.innerHTML += `<div class="error">Invalid command.</div>`;
//             break;
//     }

//     output.scrollTop = output.scrollHeight;
// }

// // Function to handle password generation
// function generatePassword(options) {
//     fetch("/generate", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(options),  // Sending the full password options
//     })
//     .then(response => response.json())
//     .then(data => {
//         let output = document.getElementById("output");
//         output.innerHTML += `<div class="output">Generated password: ${data.password}</div>`;
//         output.innerHTML += `<div class="prompt-text">Do you want to generate another password? (yes/no)</div>`;  // Ask if user wants to generate another password
//         output.scrollTop = output.scrollHeight;
//     })
//     .catch(error => {
//         let output = document.getElementById("output");
//         output.innerHTML += `<div class="error">Error generating password.</div>`;
//     });
// }

/*
let step = 0;  // Keeps track of the current prompt step
let passwordOptions = {};

// Automatically focus on the input element when the page loads
document.addEventListener("DOMContentLoaded", () => {
    let inputField = document.getElementById("input");
    inputField.focus();
    let output = document.getElementById("output");
    output.innerHTML = `<div class="prompt-text">Type 'generate password' to start generating your password.</div>`;
});

document.getElementById("input").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        let userInput = e.target.value;
        e.target.value = "";  // Clear the input after pressing enter
        handleInput(userInput);
    }
});

function handleInput(input) {
    let output = document.getElementById("output");

    // Clear command: Reset terminal but don't restart password process
    if (input.toLowerCase() === "clear") {
        output.innerHTML = "";
        output.innerHTML += `<div class="prompt-text">Type 'generate password' to start generating your password.</div>`; // Keep the original prompt
        output.scrollTop = output.scrollHeight;
        step = 0; // Reset step so it can start fresh
        return; // Just clear the screen and reset
    }

    // Add the custom symbol before user input
    let formattedInput = `૮꒰ ˶• ༝ •˶꒱ა ♡ ${input}`;

    output.innerHTML += `<div class="command">${formattedInput}</div>`;

    switch (step) {
        case 0:
            if (input.toLowerCase() === "generate password") {
                output.innerHTML += `<div class="prompt-text">Please enter the password length:</div>`;
                step++;
            } else {
                output.innerHTML += `<div class="error">Invalid command. Type 'generate password' to begin.</div>`;
            }
            break;

        case 1:
            // Password length validation (must be a valid number)
            let length = parseInt(input);
            if (isNaN(length) || length <= 0) {
                output.innerHTML += `<div class="error">Invalid input. Please enter a valid number for the password length.</div>`;
                return;  // Do not proceed until valid input is provided
            }
            passwordOptions.minLength = length;
            output.innerHTML += `<div class="prompt-text">Should the password include numbers? (yes/no):</div>`;
            step++;
            break;

        case 2:
            // Number validation (only accept "yes" or "no")
            if (input.toLowerCase() === "yes") {
                passwordOptions.hasNumber = true;
            } else if (input.toLowerCase() === "no") {
                passwordOptions.hasNumber = false;
            } else {
                output.innerHTML += `<div class="error">Invalid input. Please answer 'yes' or 'no' for numbers.</div>`;
                return;  // Do not proceed until valid input is provided
            }
            output.innerHTML += `<div class="prompt-text">Should the password include special characters? (yes/no):</div>`;
            step++;
            break;

        case 3:
            // Special character validation (only accept "yes" or "no")
            if (input.toLowerCase() === "yes") {
                passwordOptions.hasSpecial = true;
            } else if (input.toLowerCase() === "no") {
                passwordOptions.hasSpecial = false;
            } else {
                output.innerHTML += `<div class="error">Invalid input. Please answer 'yes' or 'no' for special characters.</div>`;
                return;  // Do not proceed until valid input is provided
            }
            generatePassword(passwordOptions);  // Now pass the fully constructed options
            step = 4;  // After password generation, set step to 4 to ask for "Do you want to generate another password?"
            break;

        case 4:
            // Handle whether the user wants to generate another password
            if (input.toLowerCase() === "yes") {
                // Reset the steps to start from the beginning
                output.innerHTML += `<div class="prompt-text">Please enter the password length:</div>`;
                step = 1;  // Start over from step 1
            } else if (input.toLowerCase() === "no") {
                output.innerHTML += `<div class="prompt-text">Thank you for using the password generator. Goodbye!</div>`;
                step = 0;  // Reset to start
            } else {
                output.innerHTML += `<div class="error">Invalid command. Please answer 'yes' or 'no'.</div>`;
                return;
            }
            break;

        default:
            output.innerHTML += `<div class="error">Invalid command.</div>`;
            break;
    }

    output.scrollTop = output.scrollHeight;
}

// Function to handle password generation
function generatePassword(options) {
    fetch("/generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(options),  // Sending the full password options
    })
    .then(response => response.json())
    .then(data => {
        let output = document.getElementById("output");
        output.innerHTML += `<div class="output">Generated password: ${data.password}</div>`;
        output.innerHTML += `<div class="prompt-text">Do you want to generate another password? (yes/no)</div>`;  // Ask if user wants to generate another password
        output.scrollTop = output.scrollHeight;
    })
    .catch(error => {
        let output = document.getElementById("output");
        output.innerHTML += `<div class="error">Error generating password.</div>`;
    });
}

*/


let step = 0;  // Keeps track of the current prompt step
let passwordOptions = {};

// Automatically focus on the input element when the page loads
document.addEventListener("DOMContentLoaded", () => {
    let inputField = document.getElementById("input");
    inputField.focus();
    let output = document.getElementById("output");
    output.innerHTML = `<div class="prompt-text">Type 'generate password' to start generating your password.</div>`;
    output.scrollTop = output.scrollHeight;  // Scroll to the bottom after page load
});

document.getElementById("input").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        let userInput = e.target.value;
        e.target.value = "";  // Clear the input after pressing enter
        handleInput(userInput);
    }
});

function handleInput(input) {
    let output = document.getElementById("output");

    // Clear command: Reset terminal but don't restart password process
    if (input.toLowerCase() === "clear") {
        output.innerHTML = "";
        output.innerHTML += `<div class="prompt-text">Type 'generate password' to start generating your password.</div>`;
        output.scrollTop = output.scrollHeight;
        step = 0; // Reset step so it can start fresh
        return; // Just clear the screen and reset
    }

    // Add the custom symbol before user input
    let formattedInput = `૮꒰ ˶• ༝ •˶꒱ა ♡ ${input}`;

    output.innerHTML += `<div class="command">${formattedInput}</div>`;

    switch (step) {
        case 0:
            if (input.toLowerCase() === "generate password") {
                output.innerHTML += `<div class="prompt-text">Please enter the password length:</div>`;
                step++;
            } else {
                output.innerHTML += `<div class="error">Invalid command. Type 'generate password' to begin.</div>`;
            }
            break;

        case 1:
            // Password length validation (must be a valid number)
            let length = parseInt(input);
            if (isNaN(length) || length <= 0) {
                output.innerHTML += `<div class="error">Invalid input. Please enter a valid number for the password length.</div>`;
                return;  // Do not proceed until valid input is provided
            }
            passwordOptions.minLength = length;
            output.innerHTML += `<div class="prompt-text">Should the password include numbers? (yes/no):</div>`;
            step++;
            break;

        case 2:
            // Number validation (only accept "yes" or "no")
            if (input.toLowerCase() === "yes") {
                passwordOptions.hasNumber = true;
            } else if (input.toLowerCase() === "no") {
                passwordOptions.hasNumber = false;
            } else {
                output.innerHTML += `<div class="error">Invalid input. Please answer 'yes' or 'no' for numbers.</div>`;
                return;  // Do not proceed until valid input is provided
            }
            output.innerHTML += `<div class="prompt-text">Should the password include special characters? (yes/no):</div>`;
            step++;
            break;

        case 3:
            // Special character validation (only accept "yes" or "no")
            if (input.toLowerCase() === "yes") {
                passwordOptions.hasSpecial = true;
            } else if (input.toLowerCase() === "no") {
                passwordOptions.hasSpecial = false;
            } else {
                output.innerHTML += `<div class="error">Invalid input. Please answer 'yes' or 'no' for special characters.</div>`;
                return;  // Do not proceed until valid input is provided
            }
            generatePassword(passwordOptions);  // Now pass the fully constructed options
            step = 4;  // After password generation, set step to 4 to ask for "Do you want to generate another password?"
            break;

        case 4:
            // Handle whether the user wants to generate another password
            if (input.toLowerCase() === "yes") {
                // Reset the steps to start from the beginning
                output.innerHTML += `<div class="prompt-text">Please enter the password length:</div>`;
                step = 1;  // Start over from step 1
            } else if (input.toLowerCase() === "no") {
                output.innerHTML += `<div class="prompt-text">Thank you for using the password generator. Goodbye!</div>`;
                step = 0;  // Reset to start
            } else {
                output.innerHTML += `<div class="error">Invalid command. Please answer 'yes' or 'no'.</div>`;
                return;
            }
            break;

        default:
            output.innerHTML += `<div class="error">Invalid command.</div>`;
            break;
    }

    // Ensure the terminal scrolls to the bottom every time new content is added
    output.scrollTop = output.scrollHeight;
}

// Function to handle password generation
function generatePassword(options) {
    fetch("/generate", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(options),  // Sending the full password options
    })
    .then(response => response.json())
    .then(data => {
        let output = document.getElementById("output");
        output.innerHTML += `<div class="output">Generated password: ${data.password}</div>`;
        output.innerHTML += `<div class="prompt-text">Do you want to generate another password? (yes/no)</div>`;  // Ask if user wants to generate another password
        output.scrollTop = output.scrollHeight;  // Ensure the terminal scrolls down
    })
    .catch(error => {
        let output = document.getElementById("output");
        output.innerHTML += `<div class="error">Error generating password.</div>`;
    });
}

