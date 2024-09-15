interface IProduct{
    id : number;
    name : string;
    desc : string;
    price : number;
}

var Product1 : IProduct ={
    id : 101,
    name : "Iphone",
    desc : "Iphone",
    price : 1000
}

var Product2 : IProduct ={
    id : 101,
    name : "Samsung",
    desc : "Samsung",
    price : 1500
}
//Adding methods to object interfaces
interface IItem{
    itemId : number;
    itemName : string;
    itemPrice : number;
    display() : void;
}

var item : IItem = {
    itemId : 100,
    itemName : "TV",
    itemPrice : 1500,
    display(): void {
        console.log(this.itemId +" "+this.itemName+" "+this.itemPrice);
    }

}
