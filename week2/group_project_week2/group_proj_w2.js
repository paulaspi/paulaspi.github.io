// function to return what's writen in input to a div
const div = document.querySelector("#contents")
const input = document.querySelector("#exercise1")
function writeToDiv(){
    const text = input.value;
     div.innerHTML = text

}
// function that takes a number and adds up all the numbers up to the number provided
const button = document.querySelector("#button2")
const input2 = document.querySelector("#exercise2")
const div2 = document.querySelector("#contents2")
button.addEventListener("click", function() { div2.innerHTML = sum(input2.value)}
)

function sum(number){
    if (isFinite(number)){
        let output = 0;
        for(i = 1; i <= number; i++){
            output += i
        }
    return output;
    }
}

// Function that takes two numbers and adds them up.
const input3 = document.querySelector("#add1")
const input4 = document.querySelector("#add2")
const div3 = document.querySelector("#contents3")
const button3 = document.querySelector("#plus")
button3.addEventListener("click", function() { div3.innerHTML = add(input3.value, input4.value)}
)

// Function declaration.  
function add(number1, number2){

    if (isFinite(Number(number1)) && isFinite(Number(number2)) ){
        return Number(number1) + Number(number2);
    }
}

const minusButton = document.querySelector("#minus")
const multiplyButton = document.querySelector("#multiply")

minusButton.addEventListener("click", function() { div3.innerHTML = minus(input3.value, input4.value)}
)
multiplyButton.addEventListener("click", function() { div3.innerHTML = multiply(input3.value, input4.value)}
)

// Arrow function
const multiply = (number1, number2) => {

    if (isFinite(Number(number1)) && isFinite(Number(number2)) ){
        return Number(number1) * Number(number2);
    }
}

// Function expression
const minus =  function(number1, number2){

    if (isFinite(Number(number1)) && isFinite(Number(number2)) ){
        return Number(number1) - Number(number2);
    }
}