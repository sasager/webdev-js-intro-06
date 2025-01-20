"use strict";

const submissionBtn = document.getElementById("submission-btn");
const evenOrOddElement = document.getElementById("even-or-odd");
const sumTheNumbersElement = document.getElementById("sum-the-numbers");
const createNumberArrayElement = document.getElementById("create-number-array");

function evenOrOdd() {
    const num = 3;
    // Write the logic to decide if the variable "num" is even or odd
    // and set the element's value the string "Even" or "Odd" accordingly

    if (num % 2 === 0) {
        evenOrOddElement.innerText = "Even";
    } else {
        evenOrOddElement.innerText = "Odd";
    }

}

function sumTheNumbers() {
    let sum = 0;
    // Write the logic to sum the numbers 1 through 10
    // using a for loop. Check the expected output
    // on the assignment page

   for (let i = 1; i <= 10; i++) {
        sum += i;
   }
   sumTheNumbersElement.innerText = sum;
}

function createNumberArray() {
    const numberArray = [];

    // Write the logic that loops 10 times and adds the value
    // to numberArray each iteration. Check the expected output
    // on the assignment page

    for (let i = 1; i <= 10; i++) {
        numberArray.push(i);
    }
    createNumberArrayElement.innerText = numberArray.join();
}

function render() {
    // Call the created functions
    evenOrOdd();
    sumTheNumbers();
    createNumberArray();
}

submissionBtn.addEventListener("click", function () {
    render();
});
