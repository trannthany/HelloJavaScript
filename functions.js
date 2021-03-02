//Global scope
var my_global_var = 10;

// function OurReusableFunction() {
//     console.log("Hello, World");
// }

// OurReusableFunction();


// function MyNewFunctionArgs(a, b) {
//     console.log(a - b);
// }

// MyNewFunctionArgs(10, 5);

function Fun1() {
    oops_global = 5; //because we don't use var keyword this becomes global automatically
    //different framework will treat this differently
}

function Fun2() {
    //function scope
    var output = "";
    if (typeof my_global_var != "undefined") {
        output += "my_global_var: " + my_global_var;
    }
    if (typeof oops_global != "undefined") {
        output += " oops_global: " + oops_global;
    }

    console.log(output);
}

Fun1();
Fun2();


// we can global and local variables with the same names
// the local variables will take the presedent before the global

var outer_wear = "T-Shirt";
function MyOutFit() {
    var outer_wear = "sweater";
    return outer_wear;
}

console.log(MyOutFit());
console.log(outer_wear);

function TimesFive(num) {
    return num * 5;
}
var catcher = TimesFive(24)
console.log(catcher);

//if the function does not have a return statement then it will return undefined

var sum = 0;
function AddThree() {
    sum = sum + 3;
}

catcher = AddThree();
console.log(catcher)
console.log(sum);