class Passenger {
    firstName : string;
    lastName : string;
    frequentFlyerNo : number;
}

var passenger = new Passenger();
passenger.firstName = "vani";
passenger.lastName = "muppuru";
passenger.frequentFlyerNo = 2;
console.log(passenger.firstName+"  "+passenger.lastName+" "+passenger.frequentFlyerNo);

//use of constructor
class Book {
    title : string;
    isbn : string;
    price : number;
    constructor (title : string, isbn : string, price : number){
        this.title = title;
        this.isbn = isbn;
        this.price = price;

    }
}

var book1 = new Book("toy story", "89iiiiui", 15);
console.log(book1);
