{

    // OOP -inheritance (get property + function from parent class )


    class Parent {
        name: string;
        age: number;
        address: string;


        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address
        }

        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours} Hs`);
        }
    }

    class Student extends Parent {
        // name: string;
        // age: number;
        // address: string;

        constructor(name: string, age: number, address: string) {

            // this.name = name;
            // this.age = age;
            // this.address = address;

            super(name, age, address)
        }


    }

    class Teacher extends Parent {
        // name: string;
        // age: number;
        // address: string;
        designation: string;

        constructor(name: string, age: number, address: string, designation: string) {
            // this.name = name;
            // this.age = age;
            // this.address = address;
            super(name, age, address)
            this.designation = designation

        }


        getClasses(numOfClasses: number) {
            console.log(`${this.name} will take ${numOfClasses} classes`);
        }

    }


    // instance of class Student
    // const student1 = new Student("sohel", 25, "khilkhet")
    // console.log(student1.getSleep(123));










    //
}