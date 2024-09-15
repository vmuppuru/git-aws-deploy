var employee = {
    id: 101,
    firstName: "peter",
    salary: 90000
};
for (var e in employee) {
    console.log(e);
    console.log(employee[e]);
}
//destructuring
var id = employee.id, firstName = employee.firstName, salary = employee.salary;
console.log(id + " " + firstName + " " + salary);
