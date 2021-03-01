console.log("hello world");
console.log("Hello this is my voice");
//comment

var number = 5; //assign 5 to number variable
/* multi lines
comments*/
/* Data Types:
undefined, null, boolean, string, symbol, number, and object

object stores key-value pairs
var is variable

*/

// var my_name = "Beau";
// let out_name = "FreeCodeCamp";// let is used in the scope
// const pi = 3.14;// const cannot be changed

var a;
var b = 2;
console.log(a);
a = b;
console.log(a)

var sum = b + a;
console.log(sum)

var q = 66 / 33;
console.log(q)


sum = sum + 1;
//increment and decrement
sum++;
sum--;

//decimal number;
var ourDecimal = 6.9;

var product = 2.0 * 2.5;
console.log(product)

//remainder
var remainder;
remainder = 11 % 3;
console.log(remainder);

//a = a + 12; // is the same as
a += 12;
a *= 5;
a /= 5;

//declare string variable
//Example
var frist_name = "Alan";
var last_name = "Turing";
console.log("hello, ", frist_name, last_name)
var my_string = "I am a \"double qouted\" string inside \"double qoutes\""
console.log(my_string)

//Qouting strings with single qoutes

var my_new_string = '<a href="http://www.example.com" taget="_blank">Link</a>';
console.log(my_new_string)

// back ticks `` allow double qoutes and single qoutes to be used inside a string


//Escape Sequences in Strings

/* 
    CODE OUTPUT
    \'  Single qoute
    \"  double qoute
    \\  backslash
    \n  newline
    \r  carriage return
    \t  tab
    \b  backspace
    \f  form feed
*/


var my_multi_lines_string = "First line \n\t\\Second line\nThird line"
console.log(my_multi_lines_string)


// concatinating
var our_string = "You come first. " + "then I come second"
console.log(our_string)

//appending
our_string += "then we come together";
console.log(our_string)

//find length of a string
console.log(our_string.length)

//find first char in a string
console.log(our_string[0])
console.log(our_string[55 - 1])

//String is immutable
// we cannot set: our_string[0] = L;

function word_blanks(my_noun, my_adjective, my_verb, my_adverb) {
    var result = "";
    result += "The " + my_adjective + " " + my_noun + " " + my_verb + " to the store " + my_adverb
    return result;
}

console.log(word_blanks("dog", "big", "ran", "quickly"))