function hello(name) {
    console.log("hello" + " " + name);
}
hello("vani");
//optional params
function display1(name, id, gender) {
    console.log(name + " " + id + " " + gender);
}
display1("vani", 101);
//default values for params
function show(name, gender, id) {
    if (id === void 0) { id = 100; }
    console.log(name + " " + id + " " + gender);
}
show("vani", "female");
//funciton as parameter
function calc(fun) {
    console.log(fun(45, 67));
}
function add(num1, num2) {
    return num1 + num2;
}
calc(add);
//exercise
var report = function (maths, physics, chemistry) {
    var total = maths + physics + chemistry;
    var avg = total / 3;
    if (avg > 90) {
        console.log("distinction");
    }
    else if (avg > 70 && avg <= 90) {
        console.log("first class");
    }
    else if (avg >= 50 && avg < 70) {
        console.log("second class");
    }
    else if (avg >= 35 && avg < 50) {
        console.log("pass");
    }
    else
        console.log("Fail");
};
report(45, 67, 56);
//use arrow function to find whether the given number is prime or not
var prim = function (n) {
    for (var p = 2; p <= n - 1; p++) {
        if (n % p == 0) {
            continue;
        }
        else
            console.log("prime");
    }
};
prim(45);
//returning a function, which is the other way of taking function param.
