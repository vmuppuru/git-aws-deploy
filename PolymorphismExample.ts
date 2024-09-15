class Employee{
    public firstName : string;
    public lastName : string;
    public designation : string;

    public print():void{
        console.log("Employee Details :");
    }
}

    class Manager extends Employee{
        constructor(firstName : string, lastName : string, designation : string){
            super();
            this.firstName = firstName;
            this.lastName = lastName;
            this.designation = designation;
        }
        
        print(){
            super.print();
            console.log(`${this.firstName}  ${this.lastName} - ${this.designation}`)
        }

    }
    class Lead extends Employee{
        constructor(firstName : string, lastName : string, designation : string){
            super();
            this.firstName = firstName;
            this.lastName = lastName;
            this.designation = designation;
        }
        
        print(){
            super.print();
            console.log(`${this.firstName}  ${this.lastName} - ${this.designation}`)
        }

    }
    class Developer extends Employee{
        constructor(firstName : string, lastName : string, designation : string){
            super();
            this.firstName = firstName;
            this.lastName = lastName;
            this.designation = designation;
        }
        
        print(){
            super.print();
            console.log(`${this.firstName}  ${this.lastName} - ${this.designation}`)
        }

    }
    var employees : Employee[] = new Array(new Manager("bob", "smith", "manager"), new Lead("smith", "bob", "lead"), new Developer("john", "smith", "dev"));
     for (var emp of employees) {
        emp.print();
        console.log(emp);

     }
