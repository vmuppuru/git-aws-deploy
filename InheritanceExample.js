var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BMW = /** @class */ (function () {
    function BMW(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    BMW.prototype.start = function () {
        console.log("BMW start method");
    };
    return BMW;
}());
var ThreeSeries = /** @class */ (function (_super) {
    __extends(ThreeSeries, _super);
    function ThreeSeries(make, model, year, cruiseControlEnabled) {
        var _this = _super.call(this, make, model, year) || this;
        _this.cruiseControlEnabled = cruiseControlEnabled;
        return _this;
    }
    ThreeSeries.prototype.display = function () {
        console.log(this.make + " " + this.model + " " + this.year + " " + this.cruiseControlEnabled);
    };
    ThreeSeries.prototype.start = function () {
        console.log("BMW 3 series start method");
    };
    return ThreeSeries;
}(BMW));
var FiveSeries = /** @class */ (function (_super) {
    __extends(FiveSeries, _super);
    function FiveSeries(make, model, year, parkingAssistEnabled) {
        var _this = _super.call(this, make, model, year) || this;
        _this.parkingAssistEnabled = parkingAssistEnabled;
        return _this;
    }
    FiveSeries.prototype.display = function () {
        console.log(this.make + " " + this.model + " " + this.year + " " + this.parkingAssistEnabled);
    };
    FiveSeries.prototype.start = function () {
        console.log("BMW 5 series start method");
    };
    return FiveSeries;
}(BMW));
var threeSeries = new ThreeSeries("BMW three series", "SUV", 2024, true);
threeSeries.display();
threeSeries.start();
var fiveSeries = new FiveSeries("BMW Five series", "SUV", 2024, true);
fiveSeries.display();
fiveSeries.start();
var bmwCar = new BMW("BMW", "BMW", 2022);
bmwCar.start();
