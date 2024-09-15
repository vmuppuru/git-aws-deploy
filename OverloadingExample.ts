//double me function which doubles the given number/ appends the same string after the first
//we are restricting the function to take only number and string type of data.
function doubleMe(x: number);
function doubleMe(x:string);
function doubleMe(x){
    if(x && typeof x=="number")
    console.log(x*2) ;
    else if(x && typeof x=="string"){
        console.log(x+x);
    }
}
doubleMe("vani");
doubleMe(54);