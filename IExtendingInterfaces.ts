interface ExteriorParts{
    color : string;
    numOfDoors : number;
}

interface InteriorParts{
    seats : number;
    auto : boolean;
}

interface Car extends ExteriorParts, InteriorParts{
    make : string;
    model : string;
    carType : string;
}

var myCar : Car = {
    make : "uoieuroew",
    model : "7kjk989",
    carType : "SUV",
    color : "metallic gray",
    numOfDoors : 4,
    seats : 8,
    auto : true
};
console.log(myCar)

// book interface
interface Book {
    title : string;
    isbn : string,
    desc : string;
    price : number;
}

var myBook : Book ={
    title : "Toy Story",
    isbn : "89hjkjk",
    desc : "awesome book",
    price : 15

};
console.log(myBook);
//  Note : we can use ?: for optional properties in interfaces
