function reverseNum(){
const num = document.getElementById('reverse_num').value;
const outputNum = document.getElementById('reverse_output');

// check if value entered is a number
const inputInt = parseInt(num);
if(inputInt !== NaN){
    outputNum.innerHTML = 'Reversed number: ' + Number(reverse(inputInt));
}

}

function reverse(number){
    // convert number to string
    number = number + "";
    // split() splits a string into an array of strings
    // reverse () used to reverse an array in place
    // join() joins all elements of an array into a string
    return number.split("").reverse().join("");
}

// function for finding out how many vocals are in a string
function vowelCount(){
    const string = document.getElementById('inputStr').value;
    const outputCount = document.getElementById('vowel_output');

    outputCount.innerHTML = 'Number of vowels found: ' + countingV(string);
}

/*function countingV(str){
    const vowel_list = 'aeiouAEIOU';
    let vcount = 0;

    for(let x=0; x<str.lenght; x++){
        if(vowel_list.search(str[x]) !== -1)
        {
            vcount++;
        }
    }
    return vcount;
}*/

// match() method searches for a match against a regular expression.
// /gi global, case-insensitive search.
function countingV(str){
    return str.match(/[aeiou]/gi).length;
}