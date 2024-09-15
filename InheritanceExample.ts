class BMW {
    make : string;
    model : string;
    year : number;
    constructor(make : string, model : string, year : number){
        this.make = make;
        this.model = model;
        this.year =  year;
    }
    start(){
        console.log("BMW start method");
    }
}

class ThreeSeries extends BMW {
    cruiseControlEnabled : boolean;
    constructor(make : string, model : string, year : number, cruiseControlEnabled : boolean){
        super(make, model, year);
        this.cruiseControlEnabled = cruiseControlEnabled;
    }

    display(){
        console.log(this.make+ " "+this.model+" "+this.year+" "+this.cruiseControlEnabled)
    }

    start(){
        console.log("BMW 3 series start method");
    }

}

class FiveSeries extends BMW {
    parkingAssistEnabled : boolean;
    constructor(make : string, model : string, year : number, parkingAssistEnabled : boolean){
        super(make, model, year);
        this.parkingAssistEnabled = parkingAssistEnabled;
    }

    display(){
        console.log(this.make+ " "+this.model+" "+this.year+" "+this.parkingAssistEnabled)
    }
    start(){
        console.log("BMW 5 series start method");
    }
}

var threeSeries = new ThreeSeries("BMW three series", "SUV", 2024, true);
threeSeries.display();
threeSeries.start();
var fiveSeries = new FiveSeries("BMW Five series", "SUV", 2024, true);
fiveSeries.display();
fiveSeries.start();
var bmwCar = new BMW("BMW", "BMW", 2022);
bmwCar.start();