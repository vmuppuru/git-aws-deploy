interface StudentNames{
    [index : number] : string;
}

var allStudentNames : StudentNames = ["xxx", "ttt", "uuu"];
for( var i=0; i<allStudentNames.length; i++){
    console.log(allStudentNames[i]);
}

// string indexed array interfaces

interface StudentScores{
    [index : string] : number;
}

var myStudentScores : StudentScores = {
    ["xxx"] : 99,
    ["yyy"] : 100,
    ["zzz"] : 88,
    ["ttt"] : 77
    
};
for (var s in myStudentScores){
    console.log(s);
    console.log(myStudentScores[s])
}