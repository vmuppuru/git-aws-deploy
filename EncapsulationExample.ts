class Stu{
    private _name : string;

    set setName(name : string){
        this._name = name;;
    }

    get getName():string{
        return this._name;
    }
}

var student = new Stu();
student.setName = "bob";
console.log(student.getName);