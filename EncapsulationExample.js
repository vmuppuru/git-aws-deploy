var Stu = /** @class */ (function () {
    function Stu() {
    }
    Object.defineProperty(Stu.prototype, "setName", {
        set: function (name) {
            this._name = name;
            ;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Stu.prototype, "getName", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return Stu;
}());
var student = new Stu();
student.setName = "bob";
console.log(student.getName);
