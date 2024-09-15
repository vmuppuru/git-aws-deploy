//double me function which doubles the given number/ appends the same string after the first
function doubleMe(x) {
    if (x && typeof x == "number")
        console.log(x * 2);
    else if (x && typeof x == "string") {
        console.log(x + x);
    }
}
doubleMe("vani");
doubleMe(54);
