// let currtDisplayValue = "";
// let display = document.querySelector("#display");
// display.value = currtDisplayValue;
// let buttons = document.querySelectorAll(".button");

// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         currtDisplayValue += button.textContent; // Assuming the button's text is what you want to add
//         display.value = currtDisplayValue;
//         // currtDisplayValue = "";
        
//         if(button.textContent == "="){
//             display.value = eval(currtDisplayValue);
//             currtDisplayValue = "";
//         }
//         else if(button.textContent == "c"){
//             display.value = "";
//             currtDisplayValue = "";
//         }
//         console.log(button);
//     });
// });


let currtDisplayValue = "";
let display = document.querySelector("#display");
let buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if(button.textContent === "=") {
            try {
                currtDisplayValue = eval(currtDisplayValue);
                display.value = currtDisplayValue;
            } catch (error) {
                display.value = "Error";
                currtDisplayValue = "";
            }
        } else if (button.textContent === "C") {
            display.value = "";
            currtDisplayValue = "";
      
        } else {
            currtDisplayValue += button.textContent;
            display.value = currtDisplayValue;
        }
        console.log(button);
    });
});