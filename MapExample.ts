var studentScores = new Map([["john", 90], ["bob",80], ["smith",90]]);
console.log(studentScores.get("john"));
studentScores.set("vani",100);
console.log(studentScores);
console.log(studentScores.keys());
for (let key of Array.from(studentScores.keys()) ){
    console.log(key);
    console.log(studentScores.get(key));
}

//Traversing the map elements using forEach
// let simpleCourses = new Map([[1,"java"], [2, "C#"], [3, "Python"]]);
// simpleCourses.set(4,"Go");
// simpleCourses.forEach((key,value)=>{
//     console.log(`key : ${key}, value : ${value}`)
// });

//traverse using for loop
let simpleCourses = new Map([[1,"java"], [2, "C#"], [3, "Python"]]);
simpleCourses.set(4,"Go");
for(let [key,value] of simpleCourses ){
    console.log(`key : ${key}, value : ${value}`);
}


