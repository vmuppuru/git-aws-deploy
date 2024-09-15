var employee = {
id : 101,
firstName : "peter",
salary : 90000
};

for(var e in employee){
    console.log(e);
    console.log(employee[e]);
}

//destructuring
var {id, firstName, salary} = employee;
console.log(id +" "+firstName +" "+salary);
