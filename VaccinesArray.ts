var vaccines = ["J&J", "PFizer", "Sputnik"];
console.log(vaccines.toString());
vaccines.push("Covaxin");
console.log(vaccines.join(" "));
console.log(vaccines.slice(1,4));
var v = vaccines.splice(1,2,"xxx", "uuu", "ttt");
console.log(vaccines.toString());


//for loop
for(var i=0; i<vaccines.length; i++){
   console.log(vaccines[i]);
}

//destructuring

var [a,b,c] = vaccines;
console.log(a +" "+ b +" "+c);