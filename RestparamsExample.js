//rest params means variable args, if you are not sure about the number of arguments.
var result = 1;
var product = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    for (var i = 0; i < nums.length; i++)
        result *= nums[i];
    return result;
};
console.log(product(3, 5, 6, 7, 80, 34));
//if you have other args also, then rest param should be the last element
function display(message, id) {
    var name = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        name[_i - 2] = arguments[_i];
    }
    console.log(message + " " + id + " " + name);
}
display("hello", 100);
