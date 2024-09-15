//rest params means variable args, if you are not sure about the number of arguments.

var result =1;
var product = function(...nums){

for(var i =0; i<nums.length; i++)
    result*=nums[i];
return result;
}

console.log(product(3,5,6,7,80,34));

//if you have other args also, then rest param should be the last element

function display(message : string, id :number, ...name){
    console.log(message +" "+id+" "+name);
    }
    display("hello", 100, );