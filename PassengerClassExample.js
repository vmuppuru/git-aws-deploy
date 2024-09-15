var Passenger = /** @class */ (function () {
    function Passenger() {
    }
    return Passenger;
}());
var passenger = new Passenger();
passenger.firstName = "vani";
passenger.lastName = "muppuru";
passenger.frequentFlyerNo = 2;
console.log(passenger.firstName + "  " + passenger.lastName + " " + passenger.frequentFlyerNo);
//use of constructor
var Book = /** @class */ (function () {
    function Book(title, isbn, price) {
        this.title = title;
        this.isbn = isbn;
        this.price = price;
    }
    return Book;
}());
var book1 = new Book("toy story", "89iiiiui", 15);
console.log(book1);
