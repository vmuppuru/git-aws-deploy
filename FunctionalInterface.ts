interface Add{
    (x : number, y : number):void;
}

interface Sub{
    (x : number, y : number):number;
}

var add1 : Add;
var sub1 : Sub;

add1 = (x : number, y : number) : void=>{
console.log(x+y);
}
sub1 = (x :number, y : number) : number =>{

return x-y;
}
add1(34,67);
console.log(sub1(45,67));



