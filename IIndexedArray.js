var _a;
var allStudentNames = ["xxx", "ttt", "uuu"];
for (var i = 0; i < allStudentNames.length; i++) {
    console.log(allStudentNames[i]);
}
var myStudentScores = (_a = {},
    _a["xxx"] = 99,
    _a["yyy"] = 100,
    _a["zzz"] = 88,
    _a["ttt"] = 77,
    _a);
for (var s in myStudentScores) {
    console.log(s);
    console.log(myStudentScores[s]);
}
